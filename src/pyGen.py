import string
import random
import sys

'''Functions to be added: 
   - Customize password to full extent 
     (eg. Upper Case/Lower Case/Symbols)
'''

password = ""

# asking the user to input a no for the password length 

length = int(sys.argv[1])
for x in range(length):
    x = random.randint(0,94)
    password += string.printable[x]
    
print(password)
sys.stdout.flush()
