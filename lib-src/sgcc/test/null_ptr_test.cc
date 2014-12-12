#include <gtest/gtest.h>

#include <null_ptr.hpp>


class CCObject {
  public:
    CCObject(){}
    ~CCObject(){}
};


void call_back_process(CCObject* target, void* data){
    target = NULL;
    data = NULL;
}


TEST(null_ptr_Test, call_back_process)
{
//    void call_back_process(CCObject* target, void* data);
//    bind(call_back_process, target, NULL); // error ����������void* ���������ǰ󶨵���һ������ 0

    CCObject* target = NULL;
    call_back_process(target, NULL);
}
