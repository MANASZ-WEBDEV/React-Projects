// import './App.css'
import Button from '@mui/material/Button'
import Delete from '@mui/icons-material/Delete'
import Send from '@mui/icons-material/Send'
import Alert from '@mui/material/Alert'

function App() {
  let handleClick = () => {
    console.log('Button Clicked')
  }
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant='contained' color='' onClick={handleClick} style={{margin:"7px"}}>
        Button
      </Button>
      <Button variant='contained' color='primary' onClick={handleClick} style={{margin:"7px"}}>
        Primary
      </Button>
      <Button variant='contained' color='secondary' onClick={handleClick} style={{margin:"7px"}}>
        Secondary
      </Button>
      <Button variant='contained' color='success' onClick={handleClick} size='large' style={{margin:"7px"}}>
        Success
      </Button>
      <Button variant='contained' color='error' onClick={handleClick} style={{margin:"7px"}} size='small'>
        Error
      </Button>
      <Button variant='contained' startIcon={<Delete />} onClick={handleClick} style={{margin:"7px"}}>
        Delete
      </Button>
      <Button variant='contained' endIcon={<Send />} onClick={handleClick} style={{margin:"7px"}}>
        Send
      </Button>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
    </>
  )
}

export default App
// 79d972e6d6137ddfbc200cbf1b2d3eaf
