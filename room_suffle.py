import random;
import pprint;
# Student_list = ['jagan','yogesh warathe','kapil','pavan','shahid','ajit','paranthaman','yogendra','prakash','tapas','prince','sanjay','prabhakar','anand','rahit','pratik','rohit','saquib','tariq','satyam','bhavnesh','sandeep','hemant','R.L.yogessh','jaiprakash','biju','kirithiv','aijaj','rahul','yusuf','shivam','dipesh','akash','vivek','vishal','himanshu','akhilesh','aadil','aman','shabid','roshan']
# print(len(Student_list))

# final_list = {}
r6 = ['prince','yogendra','rahul','tapas','prakash','biju','hemant','akhilesh','roshan']
r7 = ['ajit','jagan','yogesh warathe','pavan','shahid','paranthaman']
r8 = ['saquib','tariq','aman','shivam','rohit','kirithiv']
r10 = ['satyam','sandeep','bhavnesh','jaiprakash','dipesh']
r11 = ['pratik','prabhakar','rahit','yusuf','aijaj','akash','himanshu']
r12 = ['anand','sanjay','aadil','vishal','kapil','vivek','shabid','R.L.yogessh']



while True:
    i=1
    Student_list = ['jagan','yogesh warathe','kapil','pavan','shahid','ajit','paranthaman','yogendra','prakash','tapas','prince','sanjay','prabhakar','anand','rahit','pratik','rohit','saquib','tariq','satyam','bhavnesh','sandeep','hemant','R.L.yogessh','jaiprakash','biju','kirithiv','aijaj','rahul','yusuf','shivam','dipesh','akash','vivek','vishal','himanshu','akhilesh','aadil','aman','shabid','roshan']

    final_list = {}
    x=1
    while len(Student_list) != 0:
        x+=1
        name = random.choice(Student_list)
        if (i>=1 and i<=10) and (name not in r6):
            final_list[i] = name
            Student_list.remove(final_list[i])
            i+=1
        elif (i>=11 and i<=16) and name not in r7:
            final_list[i] = name
            Student_list.remove(final_list[i])
            i+=1
        elif (i>=17 and i<=22) and name not in r8:
            final_list[i] = name
            Student_list.remove(final_list[i])
            i+=1
        elif (i>=23 and i<=28) and name not in r10:
            final_list[i] = name
            Student_list.remove(final_list[i])
            i+=1
        elif (i>=29 and i<=34) and name not in r11:
            final_list[i] = name
            Student_list.remove(final_list[i])
            i+=1
        elif (i>=35 and i<=42) and name not in r12:
            final_list[i] = name
            Student_list.remove(final_list[i])
            i+=1
        
        if(x>200):
            break

    if (len(final_list) == 41):
        pprint.pprint(final_list)
        break


