import socket
import threading

class Client():
    def __init__(self,host,port):
        HOST = host
        self.PORT = port
        CONNECT = (HOST, self.PORT)
        s = socket.socket()
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.connect(CONNECT)

        f = threading.Thread(target=self.onload, args=(s, ))
        f.start()

        self.start(c=s)

    def start(self, c:socket.socket):
        while True:
            c.send(input(":").encode('utf-8'))


    def onload(self, c:socket.socket):
        while True:
            data = c.recv(1024).decode('utf-8')
            a= " "*20
            print(f"{a}{data}")
        
           
           
Client('127.0.0.3', 1234)