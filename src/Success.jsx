
const Success = ({email, setSuccess}) => {
  
  return (
    <div className="success-container">
      <img src="/images/icon-success.svg" alt='success'/>
      <h1>Thanks for subscribing!</h1>
      <p> A confirmation email has been sent to <span className="email">{email}</span>. Please open it and click the button inside to confirm your subscription. </p>
      <button onClick={()=>setSuccess(false)}>Dismiss message</button>
    </div>
  )
}

export default Success