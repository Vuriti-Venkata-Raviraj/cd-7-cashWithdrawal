// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {amount, deductMoney} = this.props

    const reduceMoney = () => {
      deductMoney(amount)
    }

    return (
      <li className="list-element">
        <button type="button" className="btn" onClick={reduceMoney}>
          {amount}
        </button>
      </li>
    )
  }
}

export default DenominationItem
