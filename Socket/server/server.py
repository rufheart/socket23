import socket
import threading


class Server():
    print('Server running')
    def __init__(self,host,port):
        HOST = host
        PORT = port
        CONNECT = (HOST,PORT)
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind(CONNECT)
        s.listen(100)



        c, self.addr1 = s.accept()
        d, self.addr2 = s.accept()

        f = threading.Thread(target=self.onload, args=(c, ))
        f1 = threading.Thread(target=self.onload2,args=(d, ))
        f.start()
        f1.start()
    
        self.start(c=c,d=d)
    
        
    def start(self, c: socket.socket,d: socket.socket):
        print('send isledi')
        while True:
            if c:
                print('c isledi')
                data = c.recv(1024).decode('utf-8')
                d.send((data).encode('utf-8'))
            if d:
                print('d isledi')
                data = d.recv(1024).decode('utf-8')
                c.send((data).encode('utf-8'))
            print(data)
            
            


    def onload(self, c:socket.socket):
        while True:
            data = c.recv(1024).decode('utf-8')
            a= " "*20
            print(f"{a}{data}")
            print(self.addr1)

            
    def onload2(self, d:socket.socket):
        while True:
            data = d.recv(1024).decode('utf-8')
            a= " "*20
            print(f"{a}{data}")     
            print(self.addr2) 
   

Server('127.0.0.3', 1234)
