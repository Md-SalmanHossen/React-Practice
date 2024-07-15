import Hero from './Hero';
const ComponentApp = () => {
    const handleClick=()=>{
        alert('button clicked')
    }
    return (
        <div>
            <Hero handleClick={handleClick}/>
            <br />
        </div>
    );
};
export default ComponentApp;