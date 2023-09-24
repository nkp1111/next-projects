import { UserDetailSchema } from '@/type'
import styles from "@/app/utils.module.css"
import useGlobalContext from '@/lib/context';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import CustomWordLink from './customWordLink';
import getUserCustomWords from '@/lib/user/getUserCustomWords';

export default function UserStats(
  { user: { username, gamePlayedNum, gameWon, guessDistribution } }
    : { user: UserDetailSchema }
) {

  const { setUserData } = useGlobalContext();
  const [userCustomWords, setUserCustomWords] = useState([]);

  useEffect(() => {
    // get user custom words
    (async () => {
      await getUserCustomWords(setUserCustomWords);
    })();
  }, [])

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-1">
          <h3 className='fw-bold mb-3'>User: <span className='text-success'>{username}</span></h3>
          {/* logout button  */}
          <button type="button"
            className='btn btn-danger'
            onClick={async () => {
              const res = await fetch("/api/logout", {
                credentials: "include",
              });
              const { success } = await res.json();
              if (success) {
                toast.success("User logged out")
                setUserData({});
              }
            }}
          >Logout</button>
        </div>

        {/* statistics  */}
        <h5 className='text-uppercase fs-6'>Statistics</h5>
        <div className="container">
          <div className="row p-0 justify-content-center">
            <div className="col-sm-6 col-12 fw-bold fs-1 m-0 text-center">{gamePlayedNum}</div>
            <div className="col-sm-6 col-12 fw-bold fs-1 m-0 text-center">{gamePlayedNum > 0 ? ((gameWon / gamePlayedNum) * 100).toFixed(0) : 0}</div>
            <div className="col-sm-6 col-12 text-center"><small>Played</small></div>
            <div className="col-sm-6 col-12 text-center"><small>Win %</small></div>
          </div>
        </div>
        <hr className='my-3' />

        {/* guess distribution  */}
        <h5 className='text-uppercase fs-6'>Guess Distribution</h5>
        <div className="container">
          {Object.keys(guessDistribution).map(guessCount => {
            const currentDist = guessDistribution[+guessCount];
            return (
              <div className={`d-flex mt-2 align-items-center ${styles.font_mono}`} key={guessCount}>
                <span className='fw-bold me-1'>{guessCount}</span>
                <div className="bg-secondary d-block"
                  style={{
                    width: currentDist > 0
                      ? ((currentDist / gameWon) * 100) + "%"
                      : "auto",
                    height: "1.5rem"
                  }}></div>
                <span className={`bg-secondary px-1 text-end`}>{currentDist}</span>
              </div>
            )
          })}
        </div>
        <hr className='my-3' />

        {/* show custom created word */}
        <h5 className='text-uppercase fs-6'>Custom Words Created</h5>
        <div className={`overflow-auto ${styles.cursor_scroll}`}
          style={{ height: userCustomWords.length === 0 ? "50px" : "120px" }}>
          {userCustomWords.length === 0 ? (
            <p>No Custom Words to Show yet.</p>
          ) : (
            <CustomWordLink customWords={userCustomWords} />
          )}
        </div>
      </div>
    </div>
  )
}
