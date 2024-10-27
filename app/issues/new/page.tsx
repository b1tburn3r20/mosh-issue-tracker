import React from 'react'
import { TextArea, TextField, Button } from '@radix-ui/themes'

const NewIssue = () => {
  return (
    <div className='max-w-xl space-y-3 p-6'>
        <TextField.Root placeholder='Title...' />
        <TextArea placeholder='Enter description'/>
        <Button>Submit Issue</Button>
    </div>
  )
}

export default NewIssue