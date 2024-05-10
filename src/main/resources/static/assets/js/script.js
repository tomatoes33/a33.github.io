/*
* 注册提交
* */
function submitRegister() {
    swal({
        title: "注册提醒",
        text: "您即将注册成功，注册即同意我们的《用户协议》及《隐私权保护声明》。",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willsubmitRegister) => {
            if (willsubmitRegister) {
                $.ajax({
                    type: "POST",
                    url: "/register/submit",
                    async: false,
                    data: $("#registerForm").serialize(),
                    success: function (data) {
                        swal(data.msg)
                        if (data.code == 1) { //如果成功，前往更新资料
                            window.location.href = "/admin/profile";
                        }
                    }
                });
            }
        });

}

/*
* 登录提交
* */
function submitLogin() {
    $.ajax({
        type: "POST",
        url: "/login/submit",
        async: false,
        data: $("#loginForm").serialize(),
        success: function (data) {
            if (data.code == 1) { //如果成功，刷新页面
                swal(data.msg)
                window.location.reload();
            } else {
                swal({
                    text: data.msg,
                    icon: "error",
                });
            }
        }
    });
}


/*
* 房屋信息保存
* */
function submitHouse() {
    swal({
        title: "关键操作提醒！",
        text: "请确认房源信息是否已填写完毕，是否上传房源？",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willSubmitHouse) => {
            if (willSubmitHouse) {
                $.ajax({
                    type: "POST",
                    url: "/admin/house/publish/submit",
                    async: false,
                    data: $("#houseForm").serialize(),
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.href = "/admin/house";
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}

/*
* 下架房屋
* */
function downHouse(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否下架该房源",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willDownHouse) => {
            if (willDownHouse) {
                $.ajax({
                    type: "POST",
                    url: "/admin/house/down",
                    async: false,
                    data: {
                        "id": id
                    },
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}

/*
* 上架房屋
* */
function upHouse(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否上架该房源",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willupHouse) => {
            if (willupHouse) {
                $.ajax({
                    type: "POST",
                    url: "/admin/house/up",
                    async: false,
                    data: {
                        "id": id
                    },
                    success: function (data) {
                        swal(data.msg)
                        if (data.code == 1) { //如果成功，刷新页面
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*
* 房屋审核通过
* */
function checkPassHouse(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否通过该房源审核",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willcheckPassHouse) => {
            if (willcheckPassHouse) {
                $.ajax({
                    type: "POST",
                    url: "/admin/house/checkPass",
                    async: false,
                    data: {
                        "id": id
                    },
                    success: function (data) {
                        swal(data.msg)
                        if (data.code == 1) { //如果成功，刷新页面
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}

/*
* 房屋审核驳回
* */
function checkRejectHouse(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否驳回该房源审核",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willcheckRejectHouse) => {
            if (willcheckRejectHouse) {
                $.ajax({
                    type: "POST",
                    url: "/admin/house/checkReject",
                    async: false,
                    data: {
                        "id": id
                    },
                    success: function (data) {
                        swal(data.msg)
                        if (data.code == 1) { //如果成功，刷新页面
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*
* 删除房屋
* */
function deleteHouse(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否继续删除该房源",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willDeleteHouse) => {
            if (willDeleteHouse) {
                $.ajax({
                    type: "POST",
                    url: "/admin/house/delete",
                    async: false,
                    data: {
                        "id": id
                    },
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}

/*
* 收藏房屋提交
* */
function submitMark(id) {
    $.ajax({
        type: "POST",
        url: "/mark/submit",
        async: false,
        data: {
            "houseId": id
        },
        success: function (data) {

            if (data.msg == "请先登录") {
                swal(data.msg);
            } else {
                swal({
                    text: data.msg,
                    icon: "success",
                });
            }
        }
    });
}


/*取消收藏功能*/
function cancelMark(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否取消收藏该房源",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willcancelMark) => {
            if (willcancelMark) {
                $.ajax({
                    type: "POST",
                    url: "/admin/mark/cancel",
                    async: false,
                    data: {
                        'id': id
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*
* 创建出租房屋订单
* */
function createOrder() {
    var houseId = $("#houseId").val();
    var endDate = $("#endDate").val();
    $.ajax({
        type: "POST",
        url: "/order/create",
        async: false,
        data: {
            "houseId": houseId,
            "endDate": endDate
        },
        success: function (data) {
            swal(data.msg)
            if (data.msg == "请先登录账号！") {
                window.location.href = "/";
            }
            //如果创建成功，跳转到签订合同页面。
            if (data.code == 1) {
                window.location.href = "/order/agreement/view?orderId=" + data.result;
            }
        }
    });
}

/*
* 完成签订合同步骤
* */
function confirmAgreement(orderId) {
    swal({
        title: "关键操作提醒！",
        text: "请您认真阅读合同，以免发生纠纷！请确认合同内容是否正确，并且您是否同意上述合同？",
        icon: "warning",
        buttons: ["取消", "我同意"],
        dangerMode: true,
    })
        .then((willconfirmAgreement) => {
            if (willconfirmAgreement) {
                $.ajax({
                    type: "POST",
                    url: "/order/agreement/submit",
                    async: false,
                    data: {
                        "orderId": orderId
                    },
                    success: function (data) {
                        swal(data.msg)
                        if (data.msg == "请先登录") {
                            window.location.href = "/";
                        }
                        //如果创建成功，跳转到支付页面。
                        if (data.code == 1) {
                            window.location.href = "/order/pay?orderId=" + data.result;
                        }
                    }
                });
            }
        });

}


/*
* 模拟支付成功
* */
function submitPay(orderId, payMethod) {
    swal({
        title: "模拟支付提醒！",
        text: "确定要模拟支付吗？",
        icon: "warning",
        buttons: ["取消", "确认模拟支付"],
        dangerMode: true,
    })
        .then((willsubmitPay) => {
            if (willsubmitPay) {
                $.ajax({
                    type: "POST",
                    url: "/order/pay/submit",
                    async: false,
                    data: {
                        "orderId": orderId,
                        "payMethod": payMethod
                    },
                    success: function (data) {
                        swal(data.msg)
                        if (data.msg == "请先登录") {
                            window.location.href = "/";
                        }
                        //如果支付成功，跳转到我的家页面。
                        if (data.code == 1) {
                            window.location.href = "/admin/home";
                        }
                    }
                });
            }
        });
}


/*个人信息保存*/
function submitProfile() {
    swal({
        title: "关键操作提醒！",
        text: "确定修改个人信息吗？",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willChangeProfile) => {
            if (willChangeProfile) {
                $.ajax({
                    type: "POST",
                    url: "/admin/profile/submit",
                    async: false,
                    data: $("#profileForm").serialize(),
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}

/*取消订单*/
function cancelOrder(orderId) {
    swal({
        title: "关键操作提醒！",
        text: "是否取消订单",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willcancelOrder) => {
            if (willcancelOrder) {
                $.ajax({
                    type: "POST",
                    url: "/admin/order/cancel",
                    async: false,
                    data: {
                        'orderId': orderId
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });

}


/*申请退租*/
function endOrder(orderId) {
    swal({
        title: "关键操作提醒！",
        text: "当前订单如果当天退租将会收取一定的手续费，确定继续吗？",
        icon: "warning",
        buttons: ["取消", "提交退租"],
        dangerMode: true,
    })
        .then((willendOrder) => {
            if (willendOrder) {
                $.ajax({
                    type: "POST",
                    url: "/admin/order/end",
                    async: false,
                    data: {
                        'orderId': orderId
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });

}


/*退租申请 通过*/
function endOrderPass(orderId) {
    swal({
        title: "关键操作提醒！",
        text: "确定【通过】退租申请吗？",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willendOrderPass) => {
            if (willendOrderPass) {
                $.ajax({
                    type: "POST",
                    url: "/admin/order/endPass",
                    async: false,
                    data: {
                        'orderId': orderId
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });

}


/*退租申请 拒绝*/
function endOrderReject(orderId) {
    swal({
        title: "关键操作提醒！",
        text: "确定【拒绝】退租申请吗？",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willendOrderReject) => {
            if (willendOrderReject) {
                $.ajax({
                    type: "POST",
                    url: "/admin/order/endReject",
                    async: false,
                    data: {
                        'orderId': orderId
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*
* 发布新闻
* */
function submitNews() {
    swal({
        title: "关键操作提醒！",
        text: "请确认新闻内容是否正确，是否继续发布新闻",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willSubmitNews) => {
            if (willSubmitNews) {
                $.ajax({
                    type: "POST",
                    url: "/admin/news/publish/submit",
                    async: false,
                    data: $("#newsForm").serialize(),
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*删除新闻功能*/
function deleteNews(id) {
    swal({
        title: "关键操作提醒！",
        text: "是否继续删除新闻",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willDeleteNews) => {
            if (willDeleteNews) {
                $.ajax({
                    type: "POST",
                    url: "/admin/news/delete",
                    async: false,
                    data: {
                        "id": id
                    },
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*
* 用户反馈
* */
function submitFeedback() {
    swal({
        title: "即将提交您的反馈！",
        text: "确定要提交吗？",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willsubmitFeedback) => {
            if (willsubmitFeedback) {
                $.ajax({
                    type: "POST",
                    url: "/feedback/submit",
                    async: false,
                    data: $("#feedbackForm").serialize(),
                    success: function (data) {
                        swal(data.msg)
                        if (data.code == 1) { //如果成功，刷新页面
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}

/*
* 给回复提交的ID赋值
* */
function showReplyModal(id) {
    $("#feedbackId").val(id);
}

/*
* 回复反馈
* */
function feedbackReplySumbit() {
    $.ajax({
        type: "POST",
        url: "/admin/feedback/reply/submit",
        async: false,
        data: $("#feedbackForm").serialize(),
        success: function (data) {
            swal(data.msg)
            if (data.code == 1) { //如果成功，刷新页面
                window.location.reload();
            } else {
                swal({
                    text: data.msg,
                    icon: "error",
                });
            }
        }
    });
}


/*删除反馈*/
function deleteFeedback(id) {
    swal({
        title: "关键操作提醒！",
        text: "即将删除反馈",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willdisableUser) => {
            if (willdisableUser) {
                $.ajax({
                    type: "POST",
                    url: "/admin/feedback/delete",
                    async: false,
                    data: {
                        'id': id
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });

}


/*禁用用户*/
function disableUser(id) {
    swal({
        title: "关键操作提醒！",
        text: "即将禁用用户",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willdisableUser) => {
            if (willdisableUser) {
                $.ajax({
                    type: "POST",
                    url: "/admin/user/disable",
                    async: false,
                    data: {
                        'id': id
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*启用用户*/
function enableUser(id) {
    swal({
        title: "关键操作提醒！",
        text: "即将启用用户",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willenableUser) => {
            if (willenableUser) {
                $.ajax({
                    type: "POST",
                    url: "/admin/user/enable",
                    async: false,
                    data: {
                        'id': id
                    },
                    success: function (data) {
                        swal(data.msg)
                        //如果更新，刷新当前页面
                        if (data.code == 1) {
                            window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}


/*
* 修改密码
* */
function submitPassword() {
    swal({
        title: "关键操作提醒！",
        text: "您即将修改您的密码，确定要修改吗？",
        icon: "warning",
        buttons: ["取消", "确定"],
        dangerMode: true,
    })
        .then((willChangePassword) => {
            if (willChangePassword) {
                $.ajax({
                    type: "POST",
                    url: "/admin/password/submit",
                    async: false,
                    data: $("#passwordForm").serialize(),
                    success: function (data) {
                        if (data.code == 1) { //如果成功，刷新页面
                            swal(data.msg), {icon: "success"},
                                window.location.reload();
                        } else {
                            swal({
                                text: data.msg,
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
}