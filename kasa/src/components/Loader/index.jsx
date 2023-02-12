
import LoaderCSS from '../../style/Loader.module.css'

function Loader()
    {

        var _counter = 1;
        var _timer = null;
        function test() {      	
        _counter = 0;
        _timer = setInterval(function(){
            document.getElementById("demo").innerHTML = _counter;
            _counter = _counter + 10;
            if(_counter > 100) clearInterval(_timer);
        }, 100);
        }

        window.onload = test();



        return (
            <div className={LoaderCSS.launcher}>
                <div className={LoaderCSS.launcherTitre}> 
                    
                    <div className={LoaderCSS.launcherTitre__text}> Vos données sont en cours de chargement </div>
                    
                
                </div> 

                <div className={LoaderCSS.progressBar}>  
                    
                    <div className={LoaderCSS.progressBar__grey}> </div>
                    <div className={LoaderCSS.progressBar__orange}> </div>  

                </div>

                <div className={LoaderCSS.launcherCountdown}> <span id="demo"> 0 </span> % </div>

            </div>
        )
    }

export default Loader