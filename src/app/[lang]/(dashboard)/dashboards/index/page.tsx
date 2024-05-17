// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CongratulationsJohn from '@/views/dashboards/index/Congratulations'
import StatisticsCard from '@/views/dashboards/index/StatisticsCard'
import LineChartProfit from '@/views/dashboards/index/LineChartProfit'
import RadialBarChart from '@/views/dashboards/index/RadialBarChart'
import DonutChartGeneratedLeads from '@/views/dashboards/index/DonutChartGeneratedLeads'
import RevenueReport from '@/views/dashboards/index/RevenueReport'
import EarningReports from '@/views/dashboards/index/EarningReports'
import PopularProducts from '@/views/dashboards/index/PopularProducts'
import Orders from '@/views/dashboards/index/Orders'
import Transactions from '@/views/dashboards/index/Transactions'
import InvoiceListTable from '@/views/dashboards/index/InvoiceListTable'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const DashboardECommerce = async () => {
  // Vars
  const invoiceData = await getData()
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <CongratulationsJohn />
      </Grid>
      <Grid item xs={12} md={8}>
        <StatisticsCard />
      </Grid>
      <Grid item xs={12} xl={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <LineChartProfit serverMode={serverMode} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <RadialBarChart serverMode={serverMode} />
          </Grid>
          <Grid item xs={12} md={6} xl={12}>
            <DonutChartGeneratedLeads serverMode={serverMode} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={8}>
        <RevenueReport serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <EarningReports serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <PopularProducts />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Orders />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Transactions />
      </Grid>
      <Grid item xs={12} lg={8}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default DashboardECommerce
