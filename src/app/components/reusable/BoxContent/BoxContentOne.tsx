
const BoxContentOne = ({ heading, content }: { heading: string, content: string }) => {
  return (
    <div className='box-content-field'>
      <div className="container">
        <h3>{heading}</h3>
        <p>
          {content}
        </p>
      </div>
      {/*  */}
    </div>
  )
}

export default BoxContentOne