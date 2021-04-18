import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Servicedetails = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <animated.div
            className="col-md-3 text-center services-card p-4 justify-content-center"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}>

            <Link to={'service/' + service._id}>
                <div className="text-center col-md-12">
                    <div className="d-flex">
                        <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                        <h6 className='mt-3 mb-3' style={{ fontSize: '16px', fontWeight: '600' }}>{service.title}</h6>
                    </div>
                    <p className='text-secondary'>{service.description}</p>
                </div>

            </Link>

        </animated.div>
    );
};

export default Servicedetails;