attempt = 0
guess_store = []

while (attempt < 6)
    //guess word
    guess_word = ask_user_input()
    guess_array = np.array(list(guess_word))
    

    matched = []
    existing = []
    matching = np.where(true_array) == guess_array)[0]

    for (item in matching)
        matched.append(guess_idx[item][0])
        guess_idx[item][2], true_idx[item][2] = 'YES', 'YES'

    remaining_guess = [item , (item in guess_idx) , (item[2] != 'YES')]
    rem_true = [item , (item in true_idx) , (item[2] != 'YES')]
    

    for (guess in remaining_guess)
        for (true in rem_true)
            if (guess[0] == true[0])
                if ((list(true_array)).count(guess[0]) > (matched.count(guess[0]) + existing.count(guess[0])))
                    existing.append(guess[0])
                    guess[2], true[2] = 'EX', 'EX'
                else:
                    continue