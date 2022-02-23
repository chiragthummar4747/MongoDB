// db.salesmaster.insertmany([{salesmanNo:'s0001',s_name:'aman',s_address1:'A/14',s_Address2:'worli',City:'mumbai',Pincode:'400002',s_State:'maharastra',salamt:3000,tgttoget:100,ytdsale:50,Remark:'Good'},
// {salesmanNo:'s0002',s_name:'aman',s_address1:'65',s_Address2:'nariman',City:'mumbai',Pincode:'400002',s_State:'maharastra',salamt:3000,tgttoget:100,ytdsale:100,Remark:'Good'},
// {salesmanNo:'s0003',s_name:'aman',s_address1:'p-07',s_Address2:'bandra',City:'mumbai',Pincode:'400002',s_State:'maharastra',salamt:3000,tgttoget:200,ytdsale:100,Remark:'Good'},
// {salesmanNo:'s0004',s_name:'aman',s_address1:'A/5',s_Address2:'juhu',City:'mumbai',Pincode:'400002',s_State:'maharastra',salamt:3500,tgttoget:200,ytdsale:150,Remark:'Good'}
// ])


// db.clientmaster.insertOne({Clientno :'C00001',Name : 'Ivan', city :'Bombay', pincode : 400054,state : 'Maharashtra', baldue :15000})
// db.clientmaster.insertOne({Clientno :'C00002',Name : 'Vandana', city :'Madras', pincode : 780001,state : 'Tamilnadu',baldue : 0})
// db.clientmaster.insertOne({Clientno :'C00003',Name : 'Pramada', city :'Bombay', pincode : 400057,state : 'Maharashtra', baldue :5000})
// db.clientmaster.insertOne({Clientno :'C00004',Name : 'Basu', city :'Bombay', pincode : 400056,state : 'Maharashtra', baldue :0})
// db.clientmaster.insertOne({Clientno :'C00005',Name : 'Ravi', city :'Delhi', pincode : 100001,state : 'Gujrat', baldue :2000})
// db.clientmaster.insertOne({Clientno :'C00006',Name : 'Rukmini', city :'Bombay', pincode : 400050,state : 'Maharashtra',baldue : 0})



// db.productmaster.insertMany([
// {productno :'P00001',description :'1.44floppies',profitpercent :5,unitmeasured :'piece',qtyonhand :100,recorderlvl :20,sellprice :525,costprice :500},
// {productno :'P03453',description :'Monitors',profitpercent :6,unitmeasured :'piece',qtyonhand :10,recorderlvl :3,sellprice :12000,costprice :11200},
// {productno :'P06734',description :'Mouse',profitpercent :5,unitmeasured :'piece',qtyonhand :20,recorderlvl :5,sellprice :1050,costprice :500},
// {productno :'P07865',description :'1.22 floppies',profitpercent :5,unitmeasured :'piece',qtyonhand :100,recorderlvl :20,sellprice :525,costprice :500},
// {productno :'P07868',description :'Keyboards',profitpercent :2,unitmeasured :'piece',qtyonhand :10,recorderlvl :3,sellprice :3150,costprice :3050},
// {productno :'P07885',description :'CD Drive',profitpercent :2.50,unitmeasured : 'piece',qtyonhand :10,recorderlvl :3,sellprice :5250,costprice :5100},
// {productno :'P07965',description :'540 HDD',profitpercent :4,unitmeasured :'piece',qtyonhand :10,recorderlvl :3,sellprice :8400,costprice :8000},
// {productno :'P07975',description :'1.44 Drive',profitpercent :5,unitmeasured :'piece',qtyonhand :10,recorderlvl :3,sellprice :1050,costprice :1000},
// {productno :'P08865',description :'1.22 Drive',profitpercent :5,unitmeasured :'piece',qtyonhand :2,recorderlvl :3,sellprice :1050,costprice :1000}
// ])

// db.salesman_master.insert([
// {salesman_no :'S00001',salesmanname :'Kiran',address :'A/14 worli',city :'Bombay',pincode :400002,state :'Mah',salamt :3000,tgttoget :100,ytdsale :50,remark :'Good'},
// {salesman_no :'S00002',salesmanname :'Manish',address :'65,nariman',city :'Bombay',pincode :400001,state :'Mah',salamt :3000,tgttoget :200,ytdsale :100,remark :'Good'},
// {salesman_no :'S00003',salesmanname :'Ravi',address :'P-7 Bandra',city :'Bombay',pincode :400032,state :'Mah',salamt :3000,tgttoget :200,ytdsale :100,remark :'Good'},
// {salesman_no :'S00004',salesmanname :'Ashish',address :'A/5 Juhu',city :'Bombay',pincode :400044,state :'Mah',salamt :3500,tgttoget :200,ytdsale :150,remark :'Good'}])


// db.sales_order.insertMany([
// {orderno :'O19001',orderdate :'12-Jan-96',delytype :'F',billyn :'N',delydate :'20-Jan-96',orderstatus :'In Process'},
// {orderno :'O19002',orderdate :'25-Jan-96',delytype :'P',billyn :'N',delydate :'27-Jan-96',orderstatus :'Cancelled'},
// {orderno :'O16865',orderdate :'18-Feb-96',delytype :'F',billyn :'Y',delydate :'20-Feb-96',orderstatus :'Fulfilled'},
// {orderno :'O19003',orderdate :'03-Apr-96',delytype :'F',billyn :'Y',delydate :'07-Apr-96',orderstatus :'Fulfilled'},
// {orderno :'O46866',orderdate :'20-May-96',delytype :'P',billyn :'N',delydate :'22-May-96',orderstatus :'Cancelled'},
// {orderno :'O10008',orderdate :'24-May-96',delytype :'F',billyn :'N',delydate :'26-May-96',orderstatus :'In Process'}])



db.sales_order_detail.insert([
{qtyorderd :4,qtydisp :4,productrate :525},
{qtyorderd :2,qtydisp :1,productrate :8400},
{qtyorderd :2,qtydisp :1,productrate :5250},
{qtyorderd :10,qtydisp :0,productrate :525},
{qtyorderd :3,qtydisp :3,productrate :3150},
{qtyorderd :10,qtydisp :10,productrate :5250},
{qtyorderd :4,qtydisp :4,productrate :1050},
{qtyorderd :2,qtydisp :2,productrate :1050},
{qtyorderd :1,qtydisp :1,productrate :2000},
{qtyorderd :1,qtydisp :0,productrate :8400},
{qtyorderd :1,qtydisp :0,productrate :1050},
{qtyorderd :10,qtydisp :5,productrate :525}
])

load("salsmenmaster.js")



// load("tables")

