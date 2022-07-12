import React,{ useState } from 'react';
import { Grid, Typography} from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import TransactionsList from './transactionsList/TransactionsList';
import AccountOptions from './accountOptions/AccountOptions';
import SpendingGraph from './spendingGraph/SpendingGraph';

export default function ViewAccount() {
  const location = useLocation()
  const [currentAccount, setCurrentAccount] = useState(location.state)
  const axios = useAxiosPrivate()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const getTransactions = async () => {
      const response = await axios.get(`/accountTransactions/${currentAccount.accountnumber}-${currentAccount.id}`)
      if (response?.response?.status === 403 || response?.response?.status === 401) throw new Error('unauthorized')
      setCurrentAccount(prev => ({ ...prev, transactions : response.data}))
      setIsMounted(true)
    }

    getTransactions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(!isMounted) return <p>Loading...</p>
  return(
    <Grid container direction='column'>
      <Grid item xs={12}>
        <NavBar />
      </Grid>

      <Grid item xs={12} sx={{ margin : '2em'}}>
        <Grid container spacing={6}>
          <Grid item xs={8}>
            <Typography
              sx={{
                textAlign : 'center',
                padding : '1em',
                paddingBottom : '0',
                textDecoration : 'underline',
              }}
              variant='h2'
            >
              {currentAccount.name}
            </Typography>
            <br />
            <Typography
              sx={{
                textAlign : 'center',
                padding : '.1em',
              }}
              variant='h2'
              >
              ${currentAccount.balance}
            </Typography>
            <TransactionsList transactions={currentAccount.transactions} type={currentAccount.type} />
          </Grid>
          <Grid item xs={4} sx={{ display : 'block'}}>
            <AccountOptions currentAccount={currentAccount} />
            <br/>
            <SpendingGraph transactions={currentAccount.transactions} type={currentAccount.type}/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}