import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Title from "../../Shared/Title";
import Loading from "../../Loading";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabContent from "../../Components/TabContent";


const WeeklyClass = () => {
    const axiosPublic=useAxiosPublic();
   
    const { data, isPending } = useQuery({
      queryKey: ["newsLetter"],
      queryFn: async () => {
        const res = await axiosPublic.get("/classess");
        return res.data;
      },
    });
  
    if (isPending) return <Loading></Loading>;

    const Sunday=data?.filter(classes=>classes.day==='Sunday');
    const Saturday=data?.filter(classes=>classes.day==='Saturday');
    const Friday=data?.filter(classes=>classes.day==='Friday');
    const Thursday=data?.filter(classes=>classes.day==='Thursday');
    const Wednesday=data?.filter(classes=>classes.day==='Wednesday');
    const Tuesday=data?.filter(classes=>classes.day==='Tuesday');
    const Monday=data?.filter(classes=>classes.day==='Monday');
    console.log(Monday,Tuesday);
   
   

    return (
        <div>
            <Title heading={'Weekly scheduled Classes'}></Title>

            <div>
            <Tabs>
    <TabList className='text-center text-[#c0bc3d] font-bold'>
      <Tab>Sunday</Tab>
      <Tab>Monday</Tab>
      <Tab>Tuesday</Tab>
      <Tab>Wednesday</Tab>
      <Tab>Thursday</Tab>
      <Tab>Friday</Tab>
      <Tab>Saturday</Tab>
    </TabList>

    <TabPanel>
      <TabContent items={Sunday}></TabContent>
    </TabPanel>
    <TabPanel>
      <TabContent items={Monday}></TabContent>
    </TabPanel>
    <TabPanel>
      <TabContent items={Tuesday}></TabContent>
    </TabPanel>
    <TabPanel>
     <TabContent items={Wednesday}></TabContent>
    </TabPanel>
    <TabPanel>
     <TabContent items={Thursday}></TabContent>
    </TabPanel>
    <TabPanel>
     <TabContent items={Friday}></TabContent>
    </TabPanel>
    <TabPanel>
     <TabContent items={Saturday}></TabContent>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default WeeklyClass;