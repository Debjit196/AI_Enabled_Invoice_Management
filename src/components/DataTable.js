import  React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios' ;
import { fade, makeStyles, Theme, createStyles,withStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    head:{color:'white'},
})
export default function DataTable() {
    const classes = useStyles();
    const columns = [
        { field: 'cust_name', headerName: 'Customer Name', width: 180 },
        { field: 'custno', headerName: 'Customer #', width:135 },
        { field: 'id', headerName: 'Invoice #', width: 150  },
        { field: 'Invo_amt', headerName: 'Invoice Amount', width: 185 },
        { field: 'due_date', headerName: 'Due Date', width: 135 },
    ];
    const [datas,setData]=React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const getLatestJSPost =async () => {
        try {
        const API_URL =
        "http://localhost:8080/1805268/Extract_data";
        const response = await axios.get(API_URL);
        setData(response.data);
        setLoading(false);
        } catch (err) {
        console.error("Error: ", err);
        }
        }
        React.useEffect(()=>{getLatestJSPost();},[]);
        console.log(datas);


        if (isLoading) {
            return <div></div>;
        }
        const rows=[
            {"cust_name":datas[0].name_customer,"custno":datas[0].cust_number,"id":datas[0].invoice_id,"Invo_amt":datas[0].total_open_amount,"due_date":datas[0].due_in_date,},
            {"cust_name":datas[1].name_customer,"custno":datas[1].cust_number,"id":datas[1].invoice_id,"Invo_amt":datas[1].total_open_amount,"due_date":datas[1].due_in_date,},
            {"cust_name":datas[2].name_customer,"custno":datas[2].cust_number,"id":datas[2].invoice_id,"Invo_amt":datas[2].total_open_amount,"due_date":datas[2].due_in_date,},
            {"cust_name":datas[3].name_customer,"custno":datas[3].cust_number,"id":datas[3].invoice_id,"Invo_amt":datas[3].total_open_amount,"due_date":datas[3].due_in_date,},
            {"cust_name":datas[4].name_customer,"custno":datas[4].cust_number,"id":datas[4].invoice_id,"Invo_amt":datas[4].total_open_amount,"due_date":datas[4].due_in_date,},
        ];
        console.log(rows);
    return <div style={{position:'relative', height: 400, width: '100%' ,left:'0' ,clear:'both',top:'3rem'}}><DataGrid checkboxSelection rows={rows} columns={columns} pageSize={5}  className={classes.head} /></div>;
}