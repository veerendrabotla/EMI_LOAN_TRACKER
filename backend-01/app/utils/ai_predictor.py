import numpy as np # type: ignore
from sklearn.linear_model import LinearRegression # type: ignore

def predict_emi_trend(past_payments):
    X = np.array(range(len(past_payments))).reshape(-1, 1)
    y = np.array(past_payments)

    model = LinearRegression()
    model.fit(X, y)

    future_index = [[len(past_payments)]]
    predicted_emi = model.predict(future_index)[0]

    return {"predicted_emi": predicted_emi}
