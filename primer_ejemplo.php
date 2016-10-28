<html>

    <head>
        <title>Ejemplo 1 de server worker</title>
        
        <script>
            var worker = new Worker('doWork.js');
            
            worker.addEventListener('message', function(e){
                console.log('Work said: ', e.data);
            }, false);
            
            worker.postMessage('Hello World');
        </script>
        
    </head>
    
    
    <body>
        <h1>Primer ejemplo de server worker</h1>
    </body>
    
</html>