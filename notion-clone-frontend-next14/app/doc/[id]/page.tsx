'use client'

const DocPage = ({ params: { id } }: {
  params: {
    id: string,
  }
}) => {
  

  return (
    <div>DocPage - {id}</div>
  )
}

export default DocPage