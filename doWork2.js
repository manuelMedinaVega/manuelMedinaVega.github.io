self.addEventListener('message', function(e){
    var data = e.data;
    
    switch(data.cmd)
    {
        case 'start':
            self.postMessage('worker started: ' + data.msg);
            break;
            
        case 'stop':
            self.postMessage('worker stopped: ' + data.msg);
            self.close(); //terminates the worker
            break;
            
        default:
            self.postMessage('Unknown command: ' + data.msg);
    };
}, false);