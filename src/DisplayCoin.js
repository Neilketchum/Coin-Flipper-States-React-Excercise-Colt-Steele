import React, { Component } from 'react'
import './DisplayCoin.css'

class DisplayCoin extends Component{
    static defaultProps = {
        faces: [ 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=0eab0b600c61a2e8bb3aa4adfa7743f511644b72-1590259447-0-AdEo33M_txO7TmCmrUE2nPxE5qbJcyZfbSfKBmJ_LGJLfNGpCovrpc0LG1PEjHdl-_lu9kx0edCoCWvUIxAx_BMd1VysJvwPsqV2Jg8GsXzBd2isWIkQ3SG-b_RYJRo13ff0L9pduSd1tX52Hk4ntDliRR8J5eVEyvyS8QJM_NqX0tYSC80Yq2W7T8Y539ZjIQUEOZD_zrPEPwEaEe-yrX5D2pcoDqnS4-EobJRpAH2UCSLxWQsMMWLEzq0qssMslGoq2rlumBjpu4csP27m1Wi_V9R7oNXAbSQa5JCkdzryXnThWJnT_fEkUsHqkURbpA','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIWFhUWFhUYFhgXFx0YGBUYGB0XFhcXFhcYHSggGBolHRoWITEiJSkrLy4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMUA/wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEEBQYDB//EAEgQAAIBAwIEBAMDCQUGBAcAAAECEQADIRIxBAUiQQYTUWEycYFCkaEUI1JicoLB8PEHM6Kx4RUkQ5Ky0WNzwsMWNERTVJOz/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APa7jgiBvQWumZxP89qXlaczMf0p/j9ooBuIWMjIro7giBvQ+ZpxvTeVHVO1ArQ074prqljIyKKdftFLXoxvQEzgiO8RQWhp3xS8qOqfennXjaKAbqljIyK6axEd4j67UOvRjfvTeV9qfePxoGtLpMnFPdGoyM0+rXjbvS1aMb96Ag4iO8R9a52lKmTgU5t/an3/AI71V3/EvDZXzQxByLQa8QfQi0GI+tBaXRq2zRq4Ag77VRjxDHwcNfcHvFtB91y4G/CuT88uEyOEf63EH+RNBe21KmTgU90atsxVJc8RPENwl3917bf9TrR2PEdtR12ryT629X/8i9Bdo4Ag71ztoVMnaovCcws3j+bvIW3KSNY+anI+oqZ5mrERNA13qiMx/PeituFEHem+D3n+FN5WrMxP9KAbaEGTtR3erbMUvN1YiJpvg95oCtuFEHBoFQgydqfy9WZin82emN8UCunVtmntsFEHBoY0Z3mlo152oGCEGe0zRXTqEDNLzJ6Y9qbTozv2oCtNpEHBrm1okyBvRaNedu1P58YjbH3UApcLGDsaK707d6K4wIgb0FrE6sUBW0DCTvQLcJMHalcUkyNq6OwIgb0A3Rp2709tAwk70NrHxU11STI2oELhJjttRXBpyKJmER3igtCPioCtrqEmg8wzp7TH02pXQSZG1VnHc4Jm3YAZh0u5ylsjBAj+8cHEAwMyQRBCdzDirdhQzMFkwBksxgmFUSWONgCcVS8Tza84JVVsoN3uwWj1CA6U9QWJ91rz3xX/AGjcNwTMtr/euKyGctKpH2Wcdp+wgAmdjXkfiPxZxfHGb94lZkW16ba/JBgn3Mn3oPYPEHjzllrFy8/GuIwPziSNiAYsr80E1leYf2zXtuH4W1bHY3Cbhj5LpA/GvLa627BbYUGt4r+1DmjnHEhB6JbQfiVJ/GoR8dczb/6299Gj/KoPCcoLdqveC8P+1Bz4bxtzXtxdz94K3/Upq+5f/aDzRY1Nau/t2gCfrbK124TwydIbQYJIBjBI3AP3Vdr4ZCnHUpypjTqG06TkCQd94oC4fx6Lo08VwMj1tsLg+ei4FI+hNaXkfiBHMcJxZDRPk3ZaO393chwP2CBVPY8Pe1d//h21cGkhXjJ2IUhmXBGzAqZ2IIoNzwviIbcUnl+lwHVa/eaAbf7wgfpGrk3o+EjTAIIyCDmQe9ed8LwfF8P8Dm9bj+7unrA/8O8cn5PP7Qqx5LzQS35OfLdT+c4e4Cok9ym6E5h0lTM9VBuHthRI3FDa6t+1QOVcxW6SMq6/GjbrOxHZlPZhjBG4IFhdz8NANxypgbUbWwBI3pW2AEHeuaqQZO1AVo6t+1NcbSYG1FdM/DT2mAEHegRtgCe8TQ2zqwaYKZntP4UV0yOmga42kwKNbQOY3prRgQd65shJwKAhb059P6U56/aKFLhYwdjRXOjbvQIXNON6byo6pokQMJO9AtwkwdqAidftFIPoxvSuDRt3p0QMJNAPlR1fWnJ142oRcJOnttVPzrixLWkbSqj8+8xAjV5YP2SRBY9lI/SlQ5cz5oCjxcCWEk3Ls6dQHxBW+ygjL/QeteIeOP7QH4sjg+Xh1tEhJQQ97sERRlU9hE98YqH/AGj+Pm4xjw3DnTwykCRjzo7n9FPQegk+gj2uU3eE4dON5ffF1rcrxT28m2ZBAVWUMLcDLz1BjgLuGK4iyUZkYQysVIkGCDByMHPpTJbJ2rd+IOX8Px1gcxslLFwto4iy0gPeADTYgHUxBBI2zJIyajcj8PM7BVUsx2AGaCi4HlJbtWo5byD2r0Lk/gAKAblwA7lUXV7xqJAn5T+NaXhvD1m0JCFo/SMz9FEf50GF5T4XZ/hQn6YHzOwrScF4ZOw0kj4gpBKezeh9q0lsqV1BjpG3To0jI+EiVmD9wMVH4riSF1W3SCILh5PcQsDT8iWEHsdiEYct8tT+aZyRAwTpyD7hQe5gTAkgUKXrYuL8Jtsy21cEAEtEEuYDZJhVkgEn0p+I6wWdCJBbJYqunV1kXUa3pmW1NGBIEwTHPDs+VQgmOo6kciBE6bfm6MI0CRMLqgEUF9xHJ7jMFUhbZ+JlP5wb4CshUiY/H5iPytUVrqkibaL06PKYqpZRFs7DKiR0ncQDWi5fxK+Vb1EBtC6hMkMBBk989+9drqJeRkmVIIMHI+RGxG9BnuDsMtp+IdtKQzLbOkJByHY6SwLH32IkTNdeI5InF2w7Jcs3BPluIF1JyGET0n9Bxnutdb/L2RQ3EcR5liz1BRb0s2nCi4waGHyVQe+JB5cY5u3LbMXVLiA2yjkaX2AxgkErg4OrIOmgprguWriWeJ6bufIv2xC3CBJ0zOl4Em0ZBAMagDGj5PzWSbdwAXQJgfC6j7aT2yJXdT6ggnkty1xNs8JxWk3SoLW9XWkQUYsplbo6WlTgkQdiaO9w1y0wsXXJdeqxfAALgY1QMeYJh1EAhpEBoAbQ29Wdqc3Z6fpVZyfm/mqQQFuJi4u8HfUp7odwfoYIIFo1sASN6AQNGd5pFNedqVs69+1M76TA2oC8yen6UwXRnftRG2ANXfehtnVg0CK687dqfz4xG2PuprjacCjFkHPrmgVwgjET7UFrE6vpNIW9OfT+lO3XtiPWgG4CTjb2ro5EYiaEXNODTC3HVQK1j4vxproJPTt7UTHXtiKSvpwaCJzbjfLt9MG43Sg/WO7H2UAsfWI3IrxT+13xSLFr8gssS7ibzd9LEkhj3ZjJPzr0HxRzoWUv8WcrZV1tj9Ij4v8AmcAfK2pG9eA8ltXuIu3ePu8O3EraPmXOpVVn+JQ2rLKACSqgmAOxoOvAeC24jhBc4e4l3iRL3LC3F1LaMaNKgdTnJI1AiVEapFD4I427wfE6xqABKXreJcCQUZWwDOM5GfkdXw/kcSl69y+9+S3rjebxIvOVYInWxtXADCautt5gbAaTMJu8ZcW5dJOlVVR8gAzHA62IkmB9kfZFBXcs5Q3EXQRbRCxOlLa6bdsGMKBsIAk7mJNeo8h5SlhdKD9u4RvG/wBB6e2d8x/DfLhaUuRk4Hy3P34+6rx+IVAAxbMCQCZOB1EYHuT6GgH8pVJdyFTtO5O4x3YmAB6kD5yG4pApZnCqPtbY23JjeonEPAyYLBQupSygkjDgdiCSdhEyYqvViCD5kBpABYRp1EfFdDBVySI6m6SCATIduKuFX0o2zYCJLlgY6iWILiVGt9KiRM9kOIIYglS4y5Pls2qQSrPbwo6dMsqDJ+ImKC2WMhTCacAAAaBElYCgkAAAjpWSdTEhalWbMqAuFXb9EDGnSCJ1QAJIwBgCdJDnwPABs3Br0nUCwLaSoBldZMEYAMAgBRGDVhfuC2huXDCj1BM+yopkH2kzmuPn3VVgtsuoEMAQG2yFmAYnOd5GYouJ4pJQ3lZPLbUC6yqmCAdQlVIBMGcTQRxzHIJskA7amCM3shyD2xq+cV24HmE30CaslZBEHSx0kMD3EEx2ip5QMcHUCBJHp7kYAyx+p9a48rsKOK1McsrlfQMNIge4Ut8wWMUGkqk4jlVmx+ePmG3bOsWwZS2ZBLqm8L8WmYGmQMCrulQZq+L3GEsk27VssUYAF3dZA8sNgZwWPbC76xM4jgzxVgW70W70a10kF7TAkJcgYnswEqZZZIOS4/iW4fRbs2BpaVTTCqrzMEYAEFmn9Vu8A0PD80/OC498G/qVfJUggqwmFJUOxJOMAQR0ggkBwsX3tML2iLtklL9sZ1KMsB3bBFxMSQYxqNbDhrgcK4MowBB7EHINVfiThtDLxC7dNu78ifzb/usYPs5J+GuHhvidDvwp2M3LPoEJ60H7LduyutBobufh/CntEAdW/vQqNG/ekU1ZFAwBmcxP0iiu5HT+FLzJ6fpTKujJ+VAVogDq3965srTiYomXXkfKiF4DEbY+6gBbhYwdjRP0bd/WiuRGIn23oLXfV9J/1oCW2GyaBbhJg7Urkz0zHtt+FdHiMRPtvQC40bd/WofNbxWyzgw5hU9mYhVMdwCZPsDUu1+t+P8ArVRz15uW1GwDPjacIs/MM/8Ay0Hi/wDbXzkItrgbewCu4/VErbU+u0/dUFBwScNw3CXbXn2ihum9YvDWvEMYudHwnSAiAuM6cTmo1ywOYc+Mrrti8dQiQ1uwssp9m0af3hWk4Twx12rlywbd268NYS0tu0gBCjqRzpBn0OqCcCgj8LyCzb0+TduOt1S2UNshA0AXBPVLqYxB8sn0racl5TEYrjyPliSWRekk6SYJZQSFYkATKwfrWz4HgOmBvBighu4toCATHYQCYgkDUQJgzkjeuF3iwy50zBlNOsJp+LzB09ExJbTidiDDWr4VSdOqARpJzOBGdjjf3NVtxkMu2FwWAuG7cnSxbULsqrwoIk4CAn7KqBcOzAkM8zura0N0iOkIQ1wT0GEwonUpPTUrhbJeTccpqyCWZS53Ughg4UEsc6WZjsoUAR7VkO0BRp+yo0gmNUygAXSCWMZnVqJPSpmPwd5xHmNaBJ1aSFYncS6kGIMyCCenqoOtzhRiTIxGBlhERBiMYEQJxGQX4a8VbRHVGFG4HcmNsYnt7yJZfLEWyWY4Es7Pmd5JjIkTEnHtXVeMtpIVAp1CAABPu0DHbJ7RsYFAn4/TEq8KQQ6CQYy2pZkkknAB3qTwvFreBOfYFGWR2JV1BB7Z2iiTiNZMRMgREgSqsJaMYbvXbh7IGRE94AGfpQFwvDC2kAROSBsMAf5AVA5hKDzBM2z5ggH7OSAfcAg/OrXVnNUnP+f8PZIRyS7yAoRmkkHpkAgH2JoNcDSqt8O3C3DWif0YB/SVSVVv3lAP1qyoOXFWdaOkkalZZG4kRImqzlvFWLKi011BcTXqnpJMk3GAYyF1T3iriqDxAqhgotBnvFSpHxO6YK5xGic9hqPagtna1eVk1K6urAgEGVODt8/xrEcZcayUun4+Gudf6yToun5FYf8AdFa3k3KBZGpoNwiCR8KLvotjss5J3Y5PYCo8R8KPNMjpup1e+NDf4dNBorT+Z8okR707vpwKpvCnEl+EtgmXt6rTxvqtkoZ+6ru3EdUT77/jQI2wBq770KNrwfwphM94n6RRXf1d/b/SgZ204HzohZBz65pWojq39/8AWubBpxMdqB1tlcnYf0on69u3rTLcLYPf+tO3Rt39aBLcC4P4UwtkdXanW2GyfwphcJ6e1A7HXt29ay/P7xT8ofvbtAfVVa7/AO4PurUMNG3f1rE+Lrv+78ax7rc/C2qfwoPGPB/KnuF3NwW1K/nrjNpEXGHSSMnU0CO/yr0jlfCvaBReM64wvmG4IaAjaTPT1K0CMEbVUeFbPl22TyhcLtbwzFVATWZJXMyVjHr9djw1i629i2uu5aLMlxnOGtgnSyKAAq9vSguuT8uCKqgQAAB8hgVorNqBXPhLMCpNBlPEfKW1lrR0i5LMAdPUCuoz6MDnG5PriD/sy4wEXSw7jUNIGDAGjSdskwSCRJGKued9dyCTpVSDBiMBpHqZjFVSW2t4VzkZQ7qO5DBYOJidyMUEjg7ahijyS2QwOH0k+hImCpaIyfQCk910bUCypJkDSS59IyPl2EmYwRxe8ziGRggPxlm1doGW1j6+8zsQuLbVh57Mw3Uuo0uckA6QC5GMQQAoJE5IMAohmZWJgnSp0gHYBgDqAIkbTp+VHfuo0u50DKhjg6QB8R7zucGJAMQaO1dtsYDag+TvLDuTGQkALmN/Q0V7jEtKqqVM4RcTPYLGD9NIyBQSeCZQFAGG1agcmcZIJMGd/nVnw4gfz9+ag8Lwx+J8HaBAj2JH+UkYqWr0EHmyXXOi2wX9Y/w7T86q+B5OV4gNfPmaLZ0gT5aEwGPUZuNkiTO5MLOdLINVnNOKSxqvtMKuQBJI9FAyxOwAoLnlTAW1t4m2qrG0gDSGA9DH02qbVHw7FobQ9tlyNWk4O6kqSIMZE9gewqy5Zxy37YuLtLKR6MjFGH0YGglVX88vtbteYkShBzsRkQTBgEkZFWFQudFfIuFvhCyZYrgZnUCCI3n2oK7iuF464jAvZQx8ILMCew8zSpX56T8jReKE6Lbdw0feJP8A00HD86VECpY4ogAwXtX2OZOWZSTXTmN7zeES5jqCN07ZG6+2cUFZ4Lv6bnFIdhcVx++isf8AFqrTsmrI/Gsh4X/+evJ68Pab667q/wAK17PpwPxoCNwHp77UKroyflinNsDq770ytrwfnigTLryPlmiF4DGcYoWbRgfPNELIOc5zQPcAjET7b0Frvq+k/wCtMtsqZOwon69u3rQDcmemY9tq6OBGIn23pkcKIO9AtsgydqB7X634/wCtYjxiP9340Dst7/oDfxrcOde3asjzvhNR4q0f+IPwe0qf5q1BQ8qtJaXU8geyk+pyQIQY3aBtV9y8PfKtrt27aGxciQ4b85MeYp06oUCBOX3NP4bAa1buHGpEb/mAP8asebcst6fNSxqYmWe0wttj9M7XB2yDG4zkBoQKegsXQ6q67MAw+REijoMpzA67joCUYOdTCBAAMagTMFSDO2BnEVwfhFtwy3lZwZ6wYJI0jI99J+fua0POuWecuIDjYnEg7oWGQp+sEAwYiss3DKSQC2oBgwJ6RHSVDQCI09u4oOvEcQVUAsGaRpzAJGdJ1GCZzkj8KOxbbSQZl+zSQuNQELDHq9c70y27ds9OnODJJ9WO5iJwNtxn1XF8YsGdLKvxZI0kbToBj5NG/cGgIEoCAquAZxA6tp+IyfqCPft25dcLhmMpckKyNGO6gHYzM6t8xiIHHly6+sqI+yYy362VBjsBG07giJnHcLrhkOi4vwsPT9Fh9pcnB2mRBoJVi9qE+tE4qttcQRAY5GD7+9SE4kGgkF6zviMXL13h7NttJN5LjGJ0paPmEn5kKv71XV27VJyxbt29euqyIiHy1LAmTAYntgSMd57UEnieQnib5svxd8abauWV2Rm1M66VRT5QUBYMoxOoZkSdVyrltvhrSWbS6UQGBJJySzMScliSSSdyTVF4dAPF3ZvC66WbY6VCqodmJDdTHUSgImMA+9aigVcOO1eW+gS2k6RgSfmcffXeovNLDPaZU06jEapjcEzAk4nHf1G9BD4PnHV5d4abgwSJa2TnAuaQJgTGMV05+35hj66f+9R7Xh5SZvXblwnJE+Ws98JDEH0ZmovECqlhUUBVBVVUCAFAIAAGwGKDN+HCf9oXI/8AxbQx/wCZdP8AGtvbiOrf3/1rGeDCPyzi3/RWzb/w+ZH+Kti6asigYTPeJ+kUV39Xf2/0pzcBGnvtQoujJoCtRHVv7/61zYtOJjtROurI+VELwGPTFAIuasev9adujbM0VxQBjf2oLOZ1fSaBxb1ZphcnpprhIONvaujqIkb0AsNG2ZrO89EX1f8A+5aIPoDaaQPmRdb/AJa0NrPxfjVN4ttxaFwbWWFw+gSCl0/RGY/uighck4fXw121ElTdSB6H84ij9x0FSOB5RcNsNaa7w7EQbd2LiH1OkOWUHMAOAP0a4+H+I0cQVJxdWB+3blhHuULT7WhU+/wXE3bjobxtWQcMqqXfVLQpJIULhepDPaKCZyQFbQtsylrZKsFmFySqiQCQFKifarCqDhLa8LfKi3dC3NC+bcu61ZhqI0gsWUyxEQBuQMGr+gVVPH8iS4xZbly0Wy3llYY+sOrAH1Iie81bUqDK3/CzKC68WVbJZrltWWO50rozA3JPqADBrlwHJSNL3LjMwE/CqqveEWCV+rE1eXrvmnH92p//AGMO/wCwD95HpuRFBDKRSBrrdX/SuE0ETibAOaihIqbxL1UcTavQX1BV7YLEzgBVGSScADJkUBcXxwXBO+Pn7Cp9pV8sLOlcmB6nJJ96j8FynjtwlpZH/EuHWJ9VRCPpqqdZ8IAgC7xN11+0g0ojT2kLrC+2qfegl+DeFROGDIseaz3GbcvLHS09xpCx7RV5Q20CgKoAAAAAEAAYAAGwoqBVR895i6XFW2RKjzHGqOgEySIMjpP3n0q8rOWeLv3YuhbVzSzxbiLluJQ6S2C0SCJWJIzQWY5oPMtqEOm6OlpHxAMxUrvIAz86rvE12WRPQE/fgf5VI5Hwdj+9RGVhK6WZiLexIVWMJgjsIBjG1ZXxZzI6b1xTlui1+0/QmPUTq+hoLL+zy35lq9e7Xb9xlPqgOlP8IFaovpwKgcl4AcPw1m0uNKAGPWM/jVjaAIzv70DeXHV9aYNrwcd6EEzHafwo7ogdP4UDM2jAz3pxZBzO+fvp7QBHVv71yZmnExQElsqZOwornXt2phc1Y9f60j0e80BI4UQd6BbZBk7UQt6s7U3mz0xQPcOvbtTHTpKOJBBBG4IPY05Gj3mkE152oMCbb2y1ufzthhpJnIHVZcn7QK6Q3qQ49a2a80DcOL6LIiWBOVAMXAY7rDT+yd6o/F9nTp4lR/djRejvan447lDLfsl+5ofD/H+Vc0MfzdwjP6L4APyYAD5hfc0ErTxHFprY+TYK6lCgPduKRIxlEBH7RIb7Bq25TxwuLpOrWgAbWuljgdRU7T/H0Ims57cdHc3LrpadegrEKVGpkcMCDIBM7wCBESeXKOE4i4bd0/mEQIqKyTcuIuOsSPLUrqhTLdUkLGmg09R+PtM9tlRgrEQCZj32IO0jHrUilQZW/wD7StfDw/DXlGwS61p/lDqV/GoR8YpbITiuHv8ACsTEumpCf1XSZHvEVt6q+crdIMItxNMFCAwbudSkZECBpkkt7UHDhuJS6ge26uh2ZSGB+RFOy1nV8NK7XLvL7p4e6pAYA6rNw76WByDEbgwGEb46cDzx1uDh+NtixfPwH/hX/wDy2zn9WTvvOAFjfWTFTOXcOHu6j8NnCj/xCJJP7KER+2fSojtVryBfzCn9Mu8+oZiV/wAOkfSgsaVKlQKlSoLyalKhipII1DdZ7ie4oKznQe4FFu5bADEMGcjU4jTblZjuTvEDBqtu3LNy4Bct3LPEMyghDpLzC64nTcAESw1QMT2qFzDgLtoHzJFtS/l3A4Ik4VryqihREAbrIzBCk6v8pQ21vNAUKHBInTI7e8EjG80FZzd04eyLVuZfVuSTBy7MTkkzH73tWR4Ox+VcdbsjKcP+duehuMPza/MKSf3/AGrv4g5zpD8Q4zhbadyf+HbEepkn947VfeCuRnhuH13DN66Tcun1Zsx7RO1Bf2xp370zpqMjanB142ikX0Y3oCNwEae+1DbGnJp/Ljq+tMG14270CuLqMijW8Bj0xQFtGN+9P5E5nfP30BXFAEjegtdU6s0yIVMnaiu9W2YoBuMQYG1dHUASN6a24UQd6BbZBk7UD2ur4s011iDA2orp1bZintuFEHegT2xpOO1ed8TwP5LdHDn+5cn8mPZcSeHPyyV9Vx9nPoItkGe29Ruc8vt8VaNpxIOfQqRkMp7MDBBoK/lHGLfT8nvgMcRqyLgGRPqwj6xPrV5xQbQ2iNcHTO09pMGB9D8jXnGq7w90cPxBPmY8q9sL4ExkfDdECRiZxWy5PzoPCXMP2PZv+xoLDlgu+WPP0+ZLTpMgCTpEwJIWJMDNSqVUfiTipVLVvS1y44CTkBhOT7LDMYzpRu5FBeUqrrzDheHENItgSzkywHxsT+lu1Lgeahyqvbey7AELcjM5wykgn2mR91BY1C5vyq1xVs2ryB0P0KnsysMqw9RUl7ygwWUE7AkAn6V0oMcvD3eFIt3mNy1tb4g7gdkv+jej7N3g4Ok5MI4e0P0baqfmoCn8QalsRGYj32rnwujSPL06QSBojSCCQQIxvM+80HalUVuPQXfKJhokZHt9e4++qTnBZbv54s9shtCoWSSxVVB0tkrIzgEXJjpoNLULjhf1J5WnTPXqOQJWYEGenUNxmPmK/kHMbYXy2u/nC5ARgVYTkLpYSDA1EH1J2q7uOFBJIAG5OwoHaIM7d52j3rI885n5x0qYtJknYNH2ieyj/X0g+dc482VU6bQksxxqAySfRf5NZXg+Hbmdzy0leCQjzLkEG+wzpWfsA/fE7RQT/CnLvy++OKdSOGskiwrY8x+90j/L0HpJrfKxJg7Vzs8IqqFtqAigBQMRGKkNcBEDega6NPw4p7SgiTvQ2hp3xTXFLGRtQIMZjtMfSiujSOnFOXBEd4ihtDTk0BWhIk5Nc2uEHBp7i6jIrot0DBO1AHm6sRE/1p/g95+lPcQKJG9Da6pnMfz2oH8vVmYpvNnpjemuOVMDAro6ACRvQDGj3n6UtGvO1NaOrfMfz2prrFTAwKB/Nnpj2mnjRnefpRMgAnvE0Fo6sHP8+1BD5vyi1xlspdWVP3qRkMp7EetYLjhe4FtHEzcs7JxAEwOwvAbH9YV6RdbSYGB/PrT3uHVkOpQQRkHIP0oM5yrnjKo1HzLZHSwMmPY7MKt+G4excuC9bMOJ1aTGqRHWvc7Z3wMxWS4zwddtM1zgLgWcmw+bbfs/oGqpfEXlOE4m2/DXfUzpPbpYZz6Z96Dc+Ibdx9K+UzWtSlykMSsjUpQwciV6dWGNcrvEPxN62EtXFRGDO9y21uNJDAKHALElVGBAGok7Aw+A8RvEyt1fUEf9QxVtZ8QWj8QZT7iR+FBC5Pwdq4l67dVWJYglhJVQqmAdx1FmxmT7YiXuvhCxzpe4iN30wdYB9NYYR+qPQVa3uH4O6SxYScsFuvbDH1ZVYBj8xUnieCs3FRNWlUEKtt9AAiAIGIA29KAuY2bflm3CSq6raQOnR8JVe0YGNpqPynikt8Nb1YCygAGTpYoIH0Bp05dw6libjEshQlrzE6TBIB1SNhkelcFt8DaIMWywMgmbjAjaGaTNBC4iwOI4m9odZRR8Ka2LJqUpqJCoJMaTBaTtpmp44K9ftBLwFuCCDh7kQwaR8KmDAMtOZFPe8Qp9hC3z6R/3ql5x4i0LN28tpTsJ0z8vtN9KDQX+NtWABJdwIydTnMnUx2E9vuFZbxB4gAXXfcJbHwrkyfQKMu3yrOjn97iG0cBw7OT/AMW4CqD3C7n6kfI1pPDngBdQ4jjbh4i92B+BPYAQAPYACgpeW8p4jmRD3FaxwY+xMPf/AGz6fqjHzxHpHBcIiotu2oRUEACjstML29Nv8q6XenbE/wA96BvM04iafyo6p2zT20DCTk1zVyTB2oDnXjaPrTa9GN6e6NO2P596e2oYScmgbyo6p94ptWvG3f1pg5JicTFFdGnIx/PvQLXoxv3peROZ3z99PaXUJOT/AD6Vya6QYB2oHtoQZO1Hd6tsxS8zViIn+tIdHvNA9twog4Nc0QgydqLy9WZin82emN6BXTq2zT2mCiDg0IGj3mlo152oBVCDPaZo7p1YGaXmz0x7U0aM7zQFabSIODXPQZntM/Tei0a87dqfzfsx7T+FA906hAzUbieCtXEKXkVgezCcV306M79qWnXnbtQYrjP7O0Da+Fu3LB7QZUDeADsPlVdd5RzS1hfK4ge3S0euck/WvR/N+zHt/Cm0aM70Hlt7m3GW8XeAuT+rt856q5jxPHxcJeH0J/8AR/MV6uRrztFNqA6Y9poPKH8UE4Tg7zfh/wCg0hzDj7n91wDCe9wn+EV6sLQTOPuiijX7RQeY2PDHNr/x3ksKf0AAw+oz+NXHK/7N+EQ67rNxFzeXJ+u9bbzdPTG1N5enMzFBz4Hh0srpVQg7ACB+FFcQkyNqI9ftH8afzNOImP60BXHBEDegtdO+JpeVpzMxT/H7RQDcQsZGRXRnBEDeh8zTjem8qOqds0CtDTvimuqWMjIop142ilr0Y3oCLiI7xFBaGnJxS8qOqfen1a8bd6Abq6jIyK6rcAETtQatGN+9N5E5nfP30BPbCiRuKG31b9qVKga45UwNqNrYAkb09KgC2dW/amuMVMDalSoDNsAT33obZ1YNKlQK42kwKLyxGrvE/XelSoBttqMH50rjacClSoCFsRPeJ+tBbbUYO1KlQPcOnAohbBE996elQc7bljB2p7h07d6VKgJLYIk70COWMHalSoHudO3eiRAwk7mlSoAS4WMHaiudO3elSoHRAwk70CuSYO1KlQFcGnantoGEnelSoADkmO21FcGkSKVKgVtdQk0BukGPSlSoP//Z']
    }
    render(){
            return(
                <div className = 'DisplayCoin-Coin'>
                        <img src={this.props.faces[this.props.index]} alt=""/>
                </div>
            )
    }
}
export default DisplayCoin