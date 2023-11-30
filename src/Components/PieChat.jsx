import { PieChart, Pie, Cell,ResponsiveContainer } from 'recharts';

const PieChat = ({paidMembersNumber,newsLetterNumber}) => {
    const data2 = [
        { name: 'Total Paid Members', value:paidMembersNumber  },
        { name: 'Total NewsLetter', value:newsLetterNumber },
      ];
      
      const COLORS = ['#193e51', '#c3bd2e']; 
      
      const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      );
    };
  
    return (
        <div>
        <div className='md:px-10 max-w-[800px] flex justify-center items-center mx-auto mt-20'>
         <div className='lg:w-[800px] w-full h-96  '>
          <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400} >
            <Pie 
              data={data2}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
           
          </PieChart>
          </ResponsiveContainer>
         </div>
        
         </div>
  
         <div className='flex gap-10 items-center justify-center md:flex-row flex-col my-10'>
            <div className='flex gap-5 items-center'>
              <h1 className='font-semibold text-lg'>Total Paid Members</h1>
              <p className='bg-[#193e51] h-4 w-36 rounded-md'></p>
            </div>
            <div className='flex gap-5 items-center'>
              <h1 className='font-semibold text-lg'>Total NewsLetter</h1>
              <p className='bg-[#c3bd2e] h-4 w-36 rounded-md'></p>
            </div>
         </div>
         </div>
    );
};

export default PieChat;