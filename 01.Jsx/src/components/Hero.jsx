import ComponentApp from './ComponentApp';
const Hero = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>click</button>
            <hr />
        </div>
    );
};

export default Hero;