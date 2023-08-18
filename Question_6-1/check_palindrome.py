def check_palindrome():
    user_input = input("Enter a word: ").strip()  
    
    
    if user_input == user_input[::-1]:
        print(f"'{user_input}' is a palindrome!")
    else:
        reversed_input = user_input[::-1]
        print(f"'{user_input}' is not a palindrome. Reversed: '{reversed_input}'")


check_palindrome()
