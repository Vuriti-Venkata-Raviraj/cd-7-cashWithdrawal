// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  deductMoney = amount => {
    this.setState(prevState => ({
      balance: prevState.balance - amount,
    }))
  }

  render() {
    const {balance} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <div className="name-container">
            <div className="s">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="show-money">
            <p className="your-balance">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="btn-container">
            <DenominationItem amount={50} deductMoney={this.deductMoney} />
            <DenominationItem amount={100} deductMoney={this.deductMoney} />
            <DenominationItem amount={200} deductMoney={this.deductMoney} />
            <DenominationItem amount={500} deductMoney={this.deductMoney} />
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
