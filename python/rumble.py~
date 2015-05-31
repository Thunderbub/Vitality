#!/usr/bin/python
import time 
import thread

from pymouse import PyMouse
from pykeyboard import PyKeyboard


m = PyMouse()
k = PyKeyboard()

x_dim, y_dim = m.screen_size()
m.click(x_dim/2, y_dim/2, 1)
k.type_string('Hello, Sir!')


   # print "This prints once a minute."
current_time = time.time()
time_to_sleep = 10 - (current_time % 10)
time.sleep(time_to_sleep)




while True:
    reply = raw_input('Enter you_re name, [tpye "stop" to quit]: ')
    print reply.lower()
    if reply == 'stop':
        break
for counter in range(1, 6):
    print counter
# pressing a key
#print "Let the magic begini!"
#x = 1
#while True:

 #   print "To infinity and beyond! We're getting close, on %d now!" % (x)

 #   x += 10


def input_thread(L):
    raw_input()
    L.append(None)
   
def do_print():
    L = []
    thread.start_new_thread(input_thread, (L,))
    while 1:
        time.sleep(1)
        if L: break

k.press_key('Page_Down')
k.release_key('Page_Down')
print "Slide down!"
k.tap_key('Page_Down',n=5,interval=5) 

      
       
do_print()

 
count = 0
while (count < 9):
   print 'The count is:', count

   count = count + 1




