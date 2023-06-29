import { useContext } from "react"
import { Context } from "./Context"

export default function Order() {
    const $ = useContext(Context);
    return (
        <div className="order-container">
            <div className="order-container-picture">
                <h2>Պատվեր</h2>
            </div>
            <div className="sides">
                <div className="order-left-side">
                    <h2>Վճարման մանրամասները</h2>
                    <div className="order-left-form">
                        <label>
                            <div className="name-field">
                                <span>Անուն *</span>
                                <input type="text" />
                            </div>
                            <div className="name-field">
                                <span>Ազգանուն *</span>
                                <input type="text" />
                            </div>
                        </label>
                        <span>Քարտի համարը *</span>
                        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                        <span>Քարտի Գաղտնագիրը *</span>
                        <input type="text" placeholder="123" />
                        <span>Քարտի տարեթիվը *</span>
                        <input type="text" placeholder="12/03" />
                        <button>Հաստատել առաքումը</button>
                    </div>
                </div>
                <div className="order-right-side">
                    <h2>Ձեր պատվերը</h2>
                    <div className="order-side">
                        <div className="side">
                            <span>Ապրանք</span>
                            <span>Ենթագումար</span>
                        </div>
                        {$.cart.map(prod => {
                            return <div className="side-new">
                                <span>{prod.name} x {prod.quanity}</span>
                                <span>{prod.price} դրամ</span>
                            </div>
                        })}
                        <div className="side">
                            <span>Ենթագումար</span>
                            <span>{$.total} դրամ</span>
                        </div>
                        <div className="side">
                            <span>Առաքում</span>
                            <span>400 դրամ</span>
                        </div>
                        <div className="side">
                            <span>Ընդհանուր</span>
                            <span>{$.total + 400} դրամ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
