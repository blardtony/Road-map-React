
interface WelcomeProps {
  message: string;
}
const Welcome = ( {message}: WelcomeProps ) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Welcome;