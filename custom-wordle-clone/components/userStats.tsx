import { UserDetailSchema } from '@/type'
import styles from "@/app/utils.module.css"

export default function UserStats(
  { user: { username, gamePlayedNum, gameWon, guessDistribution } }
    : { user: UserDetailSchema }
) {
  return (
    <div>
      <div className="container">
        <h3 className='fw-bold mb-5'>User: <span className='text-success'>{username}</span></h3>

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
        <h5 className='text-uppercase fs-6'>Guess Distribution</h5>
        <div className="container">
          {Object.keys(guessDistribution).map(guessCount => {
            const currentDist = guessDistribution[+guessCount];
            return (
              <div className={`d-flex mt-2 align-items-center ${styles.font_mono}`} key={guessCount}>
                <span className='fw-bold me-1'>{guessCount}</span>
                <span className={`bg-secondary px-1 text-end`}
                  style={{
                    width: currentDist > 0
                      ? ((currentDist / gameWon) * 100) + "%"
                      : "auto",
                    display: currentDist > 0
                      ? "block"
                      : "inline-block",
                  }}
                >{currentDist}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
