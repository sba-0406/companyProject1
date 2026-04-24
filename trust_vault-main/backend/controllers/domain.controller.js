const Domain = require("../models/Domain")


const AccessRequest = require("../models/AccessRequest")

exports.getDomains = async (req, res) => {
  const domains = await Domain.find()
  res.json(domains)
}

exports.createDomain = async (req, res) => {
  const domain = new Domain(req.body)
  await domain.save()
  res.json(domain)
}

exports.deleteDomain = async (req, res) => {
  await Domain.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
}


exports.getDomainStats = async (req, res) => {

  const stats = await AccessRequest.aggregate([

    {
      $addFields: {
        domain: {
          $arrayElemAt: [
            { $split: ["$email", "@"] }, 1
          ]
        }
      }
    },

    {
      $group: {
        _id: "$domain",
        totalRequests: { $sum: 1 }
      }
    },

    {
      $sort: { totalRequests: -1 }
    }

  ])

  res.json(stats)

}