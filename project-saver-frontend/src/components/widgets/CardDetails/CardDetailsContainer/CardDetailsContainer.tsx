import React, { useEffect, useState } from "react";
import CardDetailsRow from "../CardDetailsRow/CardDetailsRow";
import { CardDetailsRowModel } from "../CardDetailsRow/CardDetailsRowModel";
import CardPallette from "../CardPallette/CardPallette";
import { CardDetailsContainerProps } from "./CardDetailsContainerModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBolt, faMinus } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../../../../constants/NewColorScheme";
import './CardDetailsContainer.css'
import RoundIconButton from "../../RoundIconButton/RoundIconButton";
import { CardModel } from "../../models/CardModel";
import AddCardForm from '../AddCard/AddCardForm';
import DeletePopup from "../DeletePopup/DeletePopup";
import { getBankName, getBankCode, formatCardNumberForCardRow } from '../../../../utilities/BankUtilities'
import AcceptPayment from "../../../Payment/acceptPayment";
import { SERVER_URL } from "../../../../constants/NetworkData";


const CardDetailsContainer: React.FC<CardDetailsContainerProps> = ({ cardDetailContainerModel }: CardDetailsContainerProps) => {
    const [cardList, setCardList] = useState<CardDetailsRowModel[]>([
        // { id: 1, bankName: 'Citi Bank', cardNumber: '1234 **** **** 6789', dueAmount: '3,200.98', dueDate: '30 May 2021' },
        // { id: 2, bankName: 'Bank of America', cardNumber: '3456 **** **** 0987', dueAmount: '1,220.08', dueDate: '27 May 2021' },
        // { bankName: 'Chase Bank', cardNumber: '8821 **** **** 3429', dueAmount: '2,510.21', dueDate: '31 May 2021' },
        // { bankName: 'Wells Fargo', cardNumber: '3456 **** **** 0987', dueAmount: '1,220.08', dueDate: '27 May 2021' },
    ]);

    const [prevCardIndex, setPrevCardIndex] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);
    const [addCardPopup, setAddCardPopup] = useState(false);
    const [deletePopup, setDeletePopup] = React.useState(false);
    const [deleteCardId, setDeleteCardId] = React.useState(0);
    const [paymentDueCount, setPaymentDueCount] = useState(0);

    //TODO: username, token dynamic
    const username = 'hardik'
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjIyODAxMTA0LCJleHAiOjE2MjM2NjUxMDR9.jtuj6YRTFmj5rSGAiiSU2NZ-yrqLozwbt9-zHc1Jo_qOlAoT4IxO-R5dRXZ0-Ttf9wxirj-vbEdC8gYR0VEoyg'
    const cardListUrl = SERVER_URL + '/card/' + username;
    const addCardUrl = SERVER_URL + '/card';
    const removeCardUrl = SERVER_URL + '/card/';


    const populateCardList = async (url: string, token: string) => {
        let fetchedCardList: CardDetailsRowModel[] = [];
        await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).
            then((resp) => resp.json()).
            then((data) => {
                for (var object in data) {
                    let cardListItem: CardDetailsRowModel = {
                        id: data[object]['id'],
                        bankName: getBankName(data[object]['bank']),
                        cardNumber: formatCardNumberForCardRow(data[object]['number']),
                        dueDate: getCardDueDate(data[object]['number']),
                        dueAmount: data[object]['ammountDue'],
                        cardNumberUnmasked: data[object]['number']
                    }
                    fetchedCardList.push(cardListItem);
                }
                setCardList(fetchedCardList)
            });
    }

    useEffect(() => {
        populateCardList(cardListUrl, token);
    }, []);

    useEffect(() => {
        populateCardList(cardListUrl, token);
    }, [cardDetailContainerModel.reload]);


    const addCardRequestOptions = {
        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: ''
    };

    const removeCardApi = async (url: string, token: string) => {
        await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    const showAddCardPopupHandler = () => {
        setAddCardPopup(true);
    }

    const closeAddCardPopupHandler = () => {
        setAddCardPopup(false);
    }

    const getCardDueAmount = (cardNumber: string) => {
        const amount = Math.ceil(Math.random() * (900 - 100) + 100)// + '.' + Math.ceil(Math.random() * (99 - 10) + 10)
        return 600;//amount;
    }

    const getCardDueDate = (cardNumber: string) => {
        const dueIn = Math.ceil(Math.random() * (20 - 10) + 10)
        var date = new Date();
        date.setDate(date.getDate() + dueIn);

        const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dateString = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
        return dateString;
    }

    function showDeletePopupHandler(id: number) {
        setDeletePopup(true);
        setDeleteCardId(id)
    }

    function closeDeletePopupHandler() {
        setDeletePopup(false);
    }

    const deleteCardHandler = (id: number) => {
        const updatedCards = cardList.filter(card => card.id !== id);
        setCardList(updatedCards);
        setCardIndex(prevCardIndex);

        removeCardApi(removeCardUrl + id, token);
    }

    const addCardHandler = (addedCard: CardModel) => {
        console.log('cardValue received: ', addedCard)
        addedCard.id = Math.floor(Math.random() * 10000);
        addedCard.cardNumber = addedCard.cardNumber.replaceAll('  ', '');
        addedCard.dueAmount = getCardDueAmount(addedCard.cardNumber)
        addedCard.dueDate = '' + getCardDueDate(addedCard.dueDate)

        const expiryDate = '20' + addedCard.expiry.split('/')[1] + '-' + addedCard.expiry.split('/')[0] + '-01'

        addCardRequestOptions.body = JSON.stringify({
            "id": addedCard.id,
            "userName": username,
            "number": addedCard.cardNumber,
            "holderName": username,
            "bank": getBankCode(addedCard.bank),
            "cvv": addedCard.cvv,
            "expiry": expiryDate,
            "isDisable": false,
            "ammountDue": addedCard.dueAmount
        })

        fetch(addCardUrl, addCardRequestOptions)
            .then(response => response.json());

        const cardDisplay: CardDetailsRowModel = {
            id: addedCard.id,
            bankName: addedCard.bank,
            cardNumber: formatCardNumberForCardRow(addedCard.cardNumber),
            dueAmount: '' + addedCard.dueAmount,
            dueDate: addedCard.dueDate,
            cardNumberUnmasked: addedCard.cardNumber
        }

        const updatedCardList = cardList;
        updatedCardList.unshift(cardDisplay);

        setCardList(updatedCardList);
    }

    const updatePaymentDueCount = () => {
        var count = 0;

        for (var i = 0; i < cardList.length; i++) {
            if (parseFloat(cardList[i].dueAmount) > 0) count++;
        }

        setPaymentDueCount(count);
    }

    useEffect(() => {
        updatePaymentDueCount()
    }, [cardList.length]);

    const makePayment = () => {
        cardDetailContainerModel.payNowFunction(parseInt(cardList[cardIndex].dueAmount) * 100,
            cardDetailContainerModel.onPaymentSuccessFunction,
            '' + cardList[cardIndex].cardNumberUnmasked,
            '' + cardList[cardIndex].dueAmount,
            '' + Math.ceil(parseInt(cardList[cardIndex].dueAmount) / 10),
            '' + 'Full Payment',
            '' + cardList[cardIndex].bankName
        )
    }

    return (
        <div className="card-details-container-main">
            <label className="card-details-container-heading" style={{ color: COLORS.textPrimary }}>Credit Cards</label>

            <div className="card-details-container-content">
                <div className="card-details-container-card">
                    <CardPallette cardDetailsRowModel={cardList[cardIndex]} />
                </div>

                <div className="card-details-row-1">
                    <div className="card-details-pay-now-wrapper" onClick={() => makePayment()}>
                        <RoundIconButton icon={faBolt} text="Pay Now" iconBackground="#1924c2" backgroundColor="#334ee3" textColor="#FFF" iconColor="#ffbf00" />
                    </div>

                    <div className="card-details-remove-card-wrapper" onClick={() => showDeletePopupHandler(cardList[cardIndex].id)}>
                        <RoundIconButton icon={faMinus} text="Remove" iconBackground="#1924c2" backgroundColor="#334ee3" textColor="#FFF" iconColor="#FF8C00" />
                    </div>
                </div>
                <div className="card-details-container-list-wrapper">
                    <div className="card-details-container-list">
                        {
                            cardList.map((cardModel, index) => {
                                return (
                                    <div onClick={() => {
                                        console.log('setting card index', index)
                                        setPrevCardIndex(cardIndex); setCardIndex(index)
                                    }}>
                                        <CardDetailsRow cardDetailsRowModel={cardModel} showDeletePopupHandler={showDeletePopupHandler} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="card-details-container-add-card" onClick={showAddCardPopupHandler}>
                    <FontAwesomeIcon className="card-details-container-add-card-icon" icon={faPlusCircle} style={{ color: COLORS.textSecondary }} />
                    <label className="card-details-container-add-card-text" style={{ color: COLORS.textSecondary }}>Add Card</label>
                </div>

                {addCardPopup && <AddCardForm addCardPopup={addCardPopup} closePopup={closeAddCardPopupHandler} saveCardHandler={addCardHandler} />}
                {deletePopup && <DeletePopup deleteCard={deleteCardHandler} deletePopup={deletePopup} closeDeletePopup={closeDeletePopupHandler} deleteCardId={deleteCardId} />}
            </div>
        </div >
    )
}

export default CardDetailsContainer;