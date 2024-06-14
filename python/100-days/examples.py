
#String Literal
print("Hello World")
age=input("Enter your age: ")

print(id(age))

a,b=10,"Thomas"
print(a)
print(b)

print(a,b,age)

single='c'
double="Hello whats up"
triple="""I'm alright. Just learning python.
The class is from 6 to 10pm.
From Mondays-Fridays"""

print(single,double,triple)

#Numberical Literal
#10,100,200,300
a=0b1010
b=100
c=0o310
d=0x12c

float_1=10.5
float_2=1.5e2
#10.5, 150

x=3.14j

print(a,b,c,d)
print(float_1, float_2)
print(x,x.imag,x.real)
#3.14j, 3.14 0.0

#Boolean Literal
x=(1==True)
y=(1==False)
a=True+ 4
b=False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

#Conditional Expression
drink="Available"
food=None
x=drink
if x==drink:
    print(drink)
else:
    print(food)

#KM to Miles excercise
kilometer = int(input("Kilometer distance: "))

one_mile = 0.621

miles= kilometer * one_mile
print("The total miles is :",miles)

#Nesting Examples
tvShow = input("What is your favourite tv show? ")
if tvShow == "peppa pig":
  print("Ugh, why?")
  faveCharacter = input("Who is your favourite character? ")
  if faveCharacter == "daddy pig":
    print("Right answer")
  # Nested block of code within the first if statement 
  else:
    print("Nah, Daddy Pig's the greatest")
elif tvShow == "paw patrol":
  print("Aww, sad times")
else:
  print("Yeah, that's cool and all…")
  
  #Nested Example 2
  order = input("What would you like to order: pizza or hamburger? ")
#1
if order == "hamburger":
  print("Thank you.")
  cheese = input("Do you want cheese?")
  if cheese == "yes":
    print("You got it.")
  else: 
    print("No cheese it is.")
# Nested block of code within the first if statement
#2    
elif order == "pizza":
  print("Pizza coming up.")
  toppings = input("Do you want pepperoni on that?")
  if toppings == "yes":
    print("We will add pepperoni.")
#3 
else:
    print("Your pizza will not have pepperoni
    
# Range 
# loops inter each time while multiplying current index by 13
print("Thirteen Times Table")
for i in range(1, 13):
  print(i, "x 13 =", i * 13)

#Increments:
# begins a 0, up to 1000 and increments every 25
for i in range(0, 1001, 25)

#Backward Increments
#beginning at 10 to 0. -1 because it comes before 0, -1 decrement
for i in range(10, -1, -1):
  print(i)

# noticable errors include using while instead of for. Also, the increment should be 1 as the starting value is less than the ending value. Decremention would not be valid at this point  
while i in range (20, 40, -1):
  print(i)
  
#Random looped generated
# For loop should go before the randint method and print fuction
import random
#generates 10 random sequences of numbers
for i in range(10):
  my_number = random.randint(1, 100)
  print(my_number)

#Subroutine random 6 number dice. Range before calling to repeat 100 times

def rollDice():
  #local import
  import random
  dice = random.randint(1, 6)
  print("You rolled", dice)

for i in range(100):
  rollDice()


# subroutine recipe example
def whichCake(ingredient):
  if ingredient == "chocolate":
    print("Mmm, chocolate cake is amazing")
  elif ingredient == "broccoli":
    print("You what mate?!")
  else:
    print("Yeah, that's great I suppose...")


whichCake("chocolate")

#subroutine accepting 3 params and user input
def whichCake(ingredient, base, coating):
  if ingredient == "chocolate":
    print("Mmm, chocolate cake is amazing")
  elif ingredient == "broccoli":
    print("You what mate?!")
  else: 
    print("Yeah, that's great I suppose...")
  print("So you want a", ingredient, "cake on a", base, "base with", coating, "on top?")

userIngredient = input("Name an ingredient: ")
userBase = input("Name a type of base: ")
userCoating = input("Fave cake topping: ")
whichCake(userIngredient, userBase, userCoating)


# Subroutine pin picker
# Creates random pin number 
#subroutine has parameter called `number`
#`number` shows how many numbers we want the pin to have
def pinPicker(number):
  import random
  pin = "" #this is the empty string
  for i in range(number): #for loop shows defined amount of random numbers
    pin += str(random.randint(0,9)) #we want a string of random numbers between 0-9
  return pin
    
myPin = pinPicker(4) #4 means we want 4 random numbers
print(myPin)

#os system: 
#logs welcome message, deletes then asks username in new scree.
import os
print("Welcome")
print("to")
print("Replit")

os.system("clear")

username = input("Username: ")

#time library
import os, time

print("Welcome")
print("to")
print("Replit")

time.sleep(1)
os.system("clear")

username = input("Username: ")
