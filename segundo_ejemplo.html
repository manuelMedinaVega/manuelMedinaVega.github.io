<html>

    <head>
        <title>Ejemplo 2 de server worker</title>
        
        <script>
            function sayHi()
            {
                worker.postMessage({
                    'cmd' : 'start',
                    'msg' : 'Hi'
                });
            }
            
            function stop()
            {
                //worker.terminate(); //desde este script tambien termina con el worker
                worker.postMessage({
                    'cmd' : 'stop',
                    'msg' : 'Bye'
                });
            }
            
            function unknownCmd()
            {
                worker.postMessage({
                    'cmd' : 'foobar',
                    'msg' : '???'
                });
            }
            
            var worker = new Worker('doWork2.js');
            
            worker.addEventListener('message', function(e){
                document.getElementById('result').textContent = e.data;
            }, false);
        </script>
        
    </head>
    
    
    <body>
        
        <h1>Segundo ejemplo de server worker</h1>
        
        <button onclick="sayHi()">Say Hi!</button>
        
        <button onclick="unknownCmd()">Send unknown command</button>
        
        <button onclick="stop()">Stop worker</button>
        
        <output id="result"></output>
        
    </body>
    
</html>