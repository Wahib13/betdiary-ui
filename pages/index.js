import TestIndex from '../components/index_root'
import { useEffect, useState } from 'react'

const BET_INFO_ENDPOINT = process.env.NEXT_PUBLIC_BET_INFO_ENDPOINT
const BET_INFO_TOKEN = process.env.NEXT_PUBLIC_BET_INFO_TOKEN

console.log(process.env.NEXT_PUBLIC_BET_INFO_ENDPOINT)

export default function Home() {

  const [bet_infos, setBetInfos] = useState([{
    _id: "",
    home_team_name: "",
    away_team_name: "",
    form_difference: "",
    scoring_probabilities: [],
    conceding_probabilities: []
  }])


  useEffect(
    () => {
      async function getBetInfos() {
        fetch(BET_INFO_ENDPOINT, {
          method: 'GET',
          headers: {
            'Token': BET_INFO_TOKEN
          }
        }).then(response => response.json())
          .then(data => {
            console.log(data)
            setBetInfos(data)
          })
      }
      getBetInfos()
    }, []
  )
  return (
    <TestIndex bet_infos={bet_infos} />
  )
}
