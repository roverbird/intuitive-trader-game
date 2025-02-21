# Intuitive Trader Game

🔗[Play Intuitive Trader online](https://run.textvisualization.app/game/)

In this game, players are tasked with predicting the color of the next block in a sequence based on historical financial data from crypto tradeing. The blocks represent actual future returns of a real asset:

- **Black** represents negative returns (losses).
- **Silver** represents insignificant returns (no significant change).
- **Golden** represents large returns (gains).

---

**How to Play:**

1. **Start the Game:** Click the "Start!" button to fetch a sequence of historical return data.
2. **View the Sequence:** The game displays 12 colored blocks representing the previous returns.
3. **Make Your Prediction:** After viewing the blocks, you must guess the color of the next block in the sequence (Black, Silver, or Golden).
4. **Feedback:** If your guess is correct, your capital (score) increases. If incorrect, your capital decreases.
   - Correct guesses for **Golden** returns result in a 20% profit.
   - Correct guesses for **Silver** returns result in a 5% profit.
   - No reward is given for guessing **Black** correctly, as it represents negative returns.
   - Incorrect guesses result in a penalty based on the actual return.
5. **Switch Assets:** By pressing **Start** again, you can always switch to a different asset, which also uses real historical data. Your score remains the same, but you will see a different sequence. Maybe the new sequence is more promising and you can make better guesses?
6. **Continue:** The game loads the next sequence, and you continue guessing.
7. **Goal:** The goal is to predict the color of the next block correctly as many times as possible to maximize your capital!

---

# Overview

This repository is for the code for **Stage 1 MVP** (early demo) of a gamified platform designed to test and refine traders' intuition in financial predictions, using financial data provided by AI hedgefund.

![Trader](./assets/trader.png)

The **Intuitive Trader Game** presents a novel approach to financial prediction: players predict market returns in the form of a card game, where each card corresponds to a potential return (high, insignificant, or negative). The goal is to investigate whether human intuition, when structured through gamification, can become a reliable tool for financial forecasting. If we gather enough data, we aim at benchmarking intuitive predictions at Numer.ai Crypto Contest.

In this **Stage 1 MVP**, we will focus on gathering initial data to assess whether any players can outperform random guessing, and whether patterns of consistent success can emerge.

![Tarot Card Game](./assets/tarot.png)
*Guessing tarot cards sequence staged as an abstraction of real world trading.*

Read the White paper [Gamification of Financial Prediction: A Crowd-Sourced Experiment in Intuition](https://www.academia.edu/127714744/Gamification_of_Financial_Prediction_A_Crowd_Sourced_Experiment_in_Intuition)

### Key Features

The idea behind the project is to:
- **Gamify Financial Prediction**: Participants are presented with sequences of obfuscated, abstracted historical market data and are asked to predict future returns by choosing the next "block" in a shuffled deck of several possible outcomes (targets).
- **Test Intuition-Based Predictions**: The game encourages intuitive decision-making (System 1 thinking) rather than analytical models or knowledge-based decisions.
- **Data-Driven Validation**: The predictions of successful players are aggregated and evaluated against machine learning models in financial modeling competitions like Numer.ai.
- **Stage 1 MVP Goal**: The first phase focuses on testing whether we can identify players who consistently perform above random chance, signaling that their intuition might have predictive value.

### **Test your own intuition**  
by participating in the game: [early Demo is live](https://run.textvisualization.app/game/)!

✨ **Please, star this repo, if you like the idea, if intrested in future colaboration and if you want to receive airdrops if the project grows** ✨

