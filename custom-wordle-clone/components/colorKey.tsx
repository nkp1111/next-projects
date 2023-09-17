import utilStyles from "@/app/utils.module.css"

export default function ColorKeyword(
  { word, classInc, spInd = 0 }: { word: string, classInc?: string, spInd?: number }
) {
  return <p className='d-flex gap-2 m-0'>
    {word.split("").map((char, index) => {
      return <span key={index}
        className={`border-1 border-primary rounded-1 fw-bold fs-2 px-3 ${utilStyles.font_mono} ${spInd === index && classInc}`}>
        {char.toUpperCase()}
      </span>
    })}
  </p>
}