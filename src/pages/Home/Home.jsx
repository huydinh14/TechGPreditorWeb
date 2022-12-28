import React, { useCallback, useEffect, useState } from 'react'
import "./home.scss";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Menu from '../../component/Menu/Menu/Menu';
export default function Home() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const optionsBackground = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
        value: ["#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6
      },
      size: {
        value: { min: 1, max: 7 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, [])

  return (
    <>
      <div className="container">
        <Particles options={optionsBackground} init={particlesInit} />  
        <div className="home_title">
          <div className="title_text">
            <h1 className="title">WELLCOME TO GPREDICTOR CHART WEB</h1>
          </div>
        </div>
      </div>
      <div class="cursor" id="cursor" style={{
        left: mousePos.x - 150, top: mousePos.y - 150
      }}></div>
    </>
  );
}
