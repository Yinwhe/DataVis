'use client'

import { useEffect, useRef, useState } from "react";
import { Timeline, TimelineEvent } from "./timeline";

export function Contents() {
  const [introClass, setIntroClass] = useState('intro intro--idle');

  const introEnds = () => {
    setIntroClass('intro intro--exit intro--idle');
    setTimeout(() => {
      document.body.classList.remove('visual-intro-active');
    }, 1500);
  };


  return (
    <>
      <Intro introClass={introClass} introEnds={introEnds} />
      <Story />
    </>
  )
}

interface IntroProps {
  introClass: string;
  introEnds: () => void;
}

function Intro({ introClass, introEnds }: IntroProps) {
  return (
    <section className={introClass} onClick={introEnds}>
      <div className="intro-area intro-area--top">
        <div className="intro-slice intro-slice--1"></div>
        <div className="intro-slice intro-slice--2"></div>
        <div className="intro-slice intro-slice--3"></div>
        <div className="intro-slice intro-slice--4"></div>
      </div>
      <div className="intro-text-container intro-text-container--left">
        <div className="intro-text">
          <div className="intro__date intro__date--small-screen">557 - 1368</div>
          <div className="intro-text__paragraph">
            <p className="text-style p">
              宋代刻本之美在于字体、板式。我们特地整理分析了宋刻板中楷书字体的发展时间史及江浙、四川、福建三地宋刻本中楷书字体的异同和字体倾向，以数据可视化的形式展示楷书及宋刻本书体演变史。
            </p>
          </div>
        </div>
        <div className="intro__date intro__date--large-screen">
          1368
        </div>
      </div>
      <div className="intro-area intro-area--left"></div>
      <div className="intro-area intro-area--bottom"></div>
      <div className="intro-text-container intro-text-container--right">
        <h2 className="text-style heading1">
          <span className="intro-text intro-text__title intro-text__title--first">
            楷书书体
          </span>
          <span className="intro-text intro-text__title intro-text__title--second">
            演变史
          </span>
        </h2>
        <h3 className="text-style heading3">
          <span className="intro-text intro-text__sub-title intro-text__sub-title--first">
            两宋时期
          </span>
          <span className="intro-text intro-text__sub-title intro-text__sub-title--second">
            宋版书
          </span>
        </h3>
        <div className="intro__date intro__date--large-screen">
          557
        </div>
      </div>
      <div className="intro-area intro-area--right"></div>
    </section>
  )
}

function Story() {
  const events: TimelineEvent[] = [
    { date: '1951-03-01', name: 'Fed Accord Signing' },
    { date: '1951-07-01', name: 'Korean War Begins' },
  ];

  return (
    <div className="story-container">
      <div className="buttons">
        <button className="previous">Previous</button>
        <div className="select-box-wrapper">
          <div className="select-box-arrow"></div>
          <select id="eventSelector" name="eventSelector" className="select-box"></select>
        </div>
        <button className="next">Next</button>
      </div>
      <div id="chart-wrapper">
        <div className="fbb-chrat-container">
          <Timeline events={events} />
        </div>
      </div>
      <div className="legends">
        <p className="legends-title">数据选择</p>
        <ul className="fbb-legend-container">
          <li className="legend-item">
            <input type="checkbox" className="checkbox-ffr" id="checkbox-ffr" name="checkbox-ffr" ></input>
            <label htmlFor="checkbox-ffr">宋朝皇帝</label>
          </li>
        </ul>
      </div>
    </div>
  )
}