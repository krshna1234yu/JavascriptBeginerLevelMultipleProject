const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Every strike brings me closer to the next home run. - Babe Ruth",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Get busy living or get busy dying. - Stephen King",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Dream big. Start small. Act now. - Robin Sharma",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "You are stronger than you think. - Unknown",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "It is never too late to be what you might have been. - George Eliot",
    "You can't cross the sea merely by standing and staring at the water. - Rabindranath Tagore",
    "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "Don't count the days, make the days count. - Muhammad Ali",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain",
    "The best revenge is massive success. - Frank Sinatra",
    "You have to expect things of yourself before you can do them. - Michael Jordan",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see ",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Get busy living or get busy dying. - Stephen King",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Dream big. Start small. Act now. - Robin Sharma",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "You are stronger than you think. - Unknown",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "It is never too late to be what you might have been. - George Eliot",
    "You can't cross the sea merely by standing and staring at the water. - Rabindranath Tagore",
    "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "Don't count the days, make the days count. - Muhammad Ali",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain",
    "The best revenge is massive success. - Frank Sinatra",
    "You have to expect things of yourself before you can do them. - Michael Jordan",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Get busy living or get busy dying. - Stephen King",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Dream big. Start small. Act now. - Robin Sharma",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "You are stronger than you think. - Unknown",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "It is never too late to be what you might have been. - George Eliot",
    "You can't cross the sea merely by standing and staring at the water. - Rabindranath Tagore",
    "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "Don't count the days, make the days count. - Muhammad Ali",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain",
    "The best revenge is massive success. - Frank Sinatra",
    "You have to expect things of yourself before you can do them. - Michael Jordan",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Get busy living or get busy dying. - Stephen King",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Dream big. Start small. Act now. - Robin Sharma",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "You are stronger than you think. - Unknown",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "It is never too late to be what you might have been. - George Eliot",
    "You can't cross the sea merely by standing and staring at the water. - Rabindranath Tagore",
    "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "Don't count the days, make the days count. - Muhammad Ali",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain",
    "The best revenge is massive success. - Frank Sinatra",
    "You have to expect things of yourself before you can do them. - Michael Jordan",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Get busy living or get busy dying. - Stephen King",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Dream big. Start small. Act now. - Robin Sharma",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "You are stronger than you think. - Unknown",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "It is never too late to be what you might have been. - George Eliot",
    "You can't cross the sea merely by standing and staring at the water. - Rabindranath Tagore",
    "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "Don't count the days, make the days count. - Muhammad Ali",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain",
    "The best revenge is massive success. - Frank Sinatra",
    "You have to expect things of yourself before you can do them. - Michael Jordan",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote;
}
