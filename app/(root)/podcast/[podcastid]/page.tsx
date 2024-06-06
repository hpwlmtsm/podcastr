import React from 'react'

const PodcastDetails = ({ params }: { params: { podcastid: string }}) => {
  return (
    <p className='text-black-1'>PodcastDetails For {params.podcastid}</p>
  )
}

export default PodcastDetails