import React from 'react'
import toast from 'react-hot-toast'

export default function CustomWordLink(
  { customWords }
    : { customWords: { word: string, wordId: string }[] }
) {
  return (
    <div className='container'>
      <div className="row align-items-center">
        <div className="col-2"><strong>Word</strong></div>
        <div className="col-10"><strong>Link</strong></div>
        {customWords.map((customWord, ind) => (
          <>
            <div className="col-12 d-flex flex-wrap gap-2" key={ind}>
              <div className="d-flex">
                <div className="">{customWord.word}</div>
                <div className="ms-3">/{customWord.wordId}</div>
              </div>
              <div className='text-end ms-auto'>
                <button type="button"
                  className='btn btn-success'
                  onClick={() => {
                    navigator.clipboard.writeText(`/${customWord.wordId}`)
                    toast.success(`Word link copied - /${customWord.wordId}`)
                  }}
                >Copy Link - {customWord.word}</button>
              </div>
            </div>
            <hr className='border-white mt-1 mb-2' />
          </>
        ))}
      </div>
    </div>
  )
}
