import "./styles.scss"
import React, {useState} from 'react'
import page from './page'

export default function App() {

  const [showPage, setShowPage] = useState('none')
  var pageName = 'home';

  var playUrl = 'https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png'
  var pauseUrl = 'https://lh3.googleusercontent.com/proxy/MVIzuDezY2kvdiPE8aikMYoXMzhvk94zBaUU-MeSPA_ST7aTVMR3bOzXfVDjKB4zU3qOnHRhxZRaqyn_niO8i2twhDSzqY5xonScbRvYir-jTsbhed_GOwKJPIq_ppkLQva2m3z7'

  const [pause, setPause] = useState([playUrl, playUrl, playUrl, playUrl, playUrl])

  function checkPage(){ 
    if(page[0] === pageName && showPage === 'none'){
      setShowPage('block')
    }if(page[0] !== pageName && showPage === 'block'){
      setShowPage('none');
    }    
    setTimeout(() => {checkPage()}, 250)
  }
  checkPage()

  return (
    <div style={{display: showPage}} className="main">
      <h1 className="title"> 2020-2021 End Of Year Reflection </h1>

      <div className="options">
        <div className="option" onClick={() => {
          if(pause[0] !== pauseUrl){
            setPause([pauseUrl, playUrl, playUrl, playUrl, playUrl])
          } 
          else if(pause[0] === pauseUrl){
            setPause([playUrl, playUrl, playUrl, playUrl, playUrl])
          } 
        }}>
          <img src="https://i.ytimg.com/vi/0SZb-Q30wuw/maxresdefault.jpg" alt="option"/>
          <div className="optionFlex">
            <h2>Alone</h2>
            <img src={pause[0]} alt="song"/>
          </div>
        </div>

      </div>

    </div>
  );
}
