const express = require('express')

const {checkUser,setClaimParticipant,checkClaimParticipant,deleteUser} = require('../middleware/auth')

const createProfile = require('../functions/participant/profile/createProfile')
const updateProfile = require('../functions/participant/profile/updateProfile')
const deleteProfile = require('../functions/participant/profile/deleteProfile')

const router = express.Router()

const {getParticipant} = require('../middleware/getUser')

//check User name route 

//SET-CLAIM-ON-SIGNUP
router.post('/signup',checkUser,setClaimParticipant)


//CREATE-PROFILE
router.post('/createProfile',checkUser,checkClaimParticipant,createProfile)

//LOGIN
router.get('/login',checkUser,checkClaimParticipant,getParticipant,(req,res)=>{
    res.status(200).send(req.participant)
})

//UPDATE-PROFILE
router.patch('/updateProfile',checkUser,checkClaimParticipant,getParticipant,updateProfile)

//DELETE-PROFILE
router.delete('/deleteProfile',checkUser,checkClaimParticipant,getParticipant,deleteProfile,deleteUser)

module.exports = router