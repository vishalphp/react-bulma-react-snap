import React from 'react'

export default function SingleColumn() {
  return (
    <section className="block container">
        <div className='columns pt-6 pb-6 is-marginless is-mobile'>
            <div className='column'>
            <div className='m-auto has-text-centered is-size-4 has-text-weight-bold'>Lorem Ipsum</div>
            <div className='has-text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            
            </div>
        </div>
    </section>
  )
}
