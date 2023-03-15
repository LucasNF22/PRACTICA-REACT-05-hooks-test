import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ urlImg, type, name, style }) => {
    const nameRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0,
        heigth: 0,
    });

    useLayoutEffect(() => {
        const { width, height } = nameRef.current.getBoundingClientRect();
        setBoxSize({ width, height })
    }, [name]);

    return (
        <>
        <code>{ JSON.stringify(boxSize) }</code>
            <div className="card w-50 mw300px bg-secondary">
                <img
                    className="card-img-top bg-white w-100"
                    src={urlImg}
                    alt="Card image cap"
                />
                <div className="card-body" style={{ display: "flex" }}>
                    <h1 className="card-title " ref={nameRef}>
                        {name}
                    </h1>

                    <p className="card-text ms-2 text-info">{type.name}</p>
                </div>
            </div>

        </>
    );
};
