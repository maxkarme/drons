import "./Player.css"
import Start from "../../assets/start.png"
import Restart from "../../assets/restart.png"
import Stop from "../../assets/stop.png"
import "https://cyberbotics.com/wwi/R2023b/WebotsView.js";
import { useRef } from "react";

export default function Player() {
    const webComponentRef = useRef(null);

    function connect() {
        const defaultThumbnail = 'https://cyberbotics.com/wwi/R2023b/images/loading/default_thumbnail.png';
        webComponentRef.current.connect("ws://localhost:1234", "x3d", false, false, -1, defaultThumbnail);
    }

    return (
        <>
            <div className="player">
                <div className="player__monitor">
                    <webots-view ref={webComponentRef} className="mock"></webots-view>
                </div>
                <div className="player__panel">
                    <p className="player__panel-title">Панель управления</p>
                    <div className="player__panel__wrap">

                    <div className="player__panel-form">
                        <p className="player__form-title">Координаты вражеского дрона</p>
                        <input type="text" className="player__input"/>
                        <input type="text" className="player__input"/>
                        <input type="text" className="player__input"/>
                    </div>
                    <div className="player__panel-buttons">
                        <button onClick={connect} className="player__button">
                            <img className="player__button-img" src={Start} alt="" />
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}