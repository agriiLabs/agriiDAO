import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/Context";
import { BountyPoint, CampaignUser } from "../../../../declarations/bounty/bounty.did";

import Count from "./count/Count";
import CountPending from "./count/CountPending";
import CountRejected from "./count/CountRejected";
import CountAccepted from "./count/CountAccepted";

const RewardSummary = () => {
  const { bountyActor } = useAuth();
  const [campaignSubs, setCampaignSubs] = useState<CampaignUser[]>([]);
  const [campaignPending, setCampaignPending] = useState<CampaignUser[]>([]);
  const [campaignRejected, setCampaignRejected] = useState<CampaignUser[]>([]);
  const [campaignAccepted, setCampaignAccepted] = useState<CampaignUser[]>([]);
  const [bountyPoint, setBountyPoint] = useState<BountyPoint | null>(null);

  useEffect(() => {
    if (bountyActor) {
      getAllCampaignSubs();
      getPendingCampaignSubs();
      getRejectedCampaignSubs();
      getAcceptedCampaignSubs();
      getBountyPoints();
    }
  }, [bountyActor]);

  // get total submissions
  const getAllCampaignSubs = async () => {
    if (!bountyActor) {
      console.error("caller or bountyActor is null");
      return;
    }
    const res = await bountyActor.getAllLatestCampaignUsers();
    setCampaignSubs(res);
  };

  // get pending submissions
  const getPendingCampaignSubs = async () => {
    if (!bountyActor) {
      console.error("caller or bountyActor is null");
      return;
    }
    const res = await bountyActor.getAllLatestCampaignUsersPending();
    setCampaignPending(res);
  };

  // get rejected submissions
  const getRejectedCampaignSubs = async () => {
    if (!bountyActor) {
      console.error("caller or bountyActor is null");
      return;
    }
    const res = await bountyActor.getAllLatestCampaignUsersRejected();
    setCampaignRejected(res);
  };

  // get accepted submissions
  const getAcceptedCampaignSubs = async () => {
    if (!bountyActor) {
      console.error("caller or bountyActor is null");
      return;
    }
    const res = await bountyActor.getAllLatestCampaignUsersAccepted();
    setCampaignAccepted(res);
  };

  // get user bountyPoints
  const getBountyPoints = async () => {
    if (!bountyActor) {
      console.error("caller or bountyActor is null");
      return;
    }
    const res = await bountyActor.getBountyPointByUserId();
    if ('ok' in res) {
      setBountyPoint(res.ok);
    } else {
      console.error("Error retrieving bounty points");
    }
  }

  return (
    <>
      {/* header */}
      <div className="header header-fixed header-logo-center">
        <a className="header-title">Reward Summary</a>
        <a href="#" data-back-button className="header-icon header-icon-1">
          <i className="fas fa-arrow-left"></i>
        </a>
        <a href="#" data-toggle-theme className="header-icon header-icon-4">
          <i className="fas fa-lightbulb"></i>
        </a>
      </div>

      {/* body */}
      <div className="page-content header-clear-medium">
        <div className="card card-style">
          <div className="content">
            <p className="font-700 text-uppercase color-highlight font-12 opacity-70 mb-3 mt-n2">
              Submission Summary
            </p>
            <Link to={"/total-submissions"} className="d-flex">
              <div className="align-self-center">
                <p className="font-15 mb-n2">Total Submissions</p>
              </div>
              <div className="align-self-center ms-auto">
                <p className="font-15 mb-n2">
                  <Count {...{ campaignSubs }} />
                </p>
              </div>
            </Link>
            <div className="divider divider-margins w-100 mt-2 mb-3"></div>
            <Link to={"/total-pending"} className="d-flex">
              <div className="align-self-center">
                <p className="font-15 mb-n2">Total Pending</p>
              </div>
              <div className="align-self-center ms-auto">
                <p className="font-15 mb-0"><CountPending {...{ campaignPending }} /></p>
              </div>
            </Link>
            <div className="divider divider-margins w-100 mt-2 mb-3"></div>
            <Link to={"/total-accepted"} className="d-flex">
              <div className="align-self-center">
                <p className="font-15 mb-n2">Total Accepted</p>
              </div>
              <div className="align-self-center ms-auto">
                <p className="font-15 mb-0"><CountAccepted {...{ campaignAccepted }} /></p>
              </div>
            </Link>
            <div className="divider divider-margins w-100 mt-2 mb-3"></div>
            <Link to={"/total-rejected"} className="d-flex">
              <div className="align-self-center">
                <p className="font-15 mb-n2">Total Rejected</p>
              </div>
              <div className="align-self-center ms-auto">
                <p className="font-15 mb-0"><CountRejected {...{ campaignRejected }} /></p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card card-style">
          <div className="content">
            <p className="font-700 text-uppercase color-highlight font-12 opacity-70 mb-3 mt-n2">
              Points Summary
            </p>
            <div className="row mb-0">
              <div className="col-6">
                <p className="font-15">Total Points</p>
              </div>
              <div className="col-6">
                <p className="font-15 text-end mb-0"> {bountyPoint?.balance} </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <a
            href="#"
            className="btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mt-3"
          >
            View Leaderboard
          </a>
        </div>

        <div className="content">
          <Link
            to={"/reward-campaigns"}
            className="btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mt-3"
          >
            View Campaigns
          </Link>
        </div>
      </div>
    </>
  );
};
export default RewardSummary;
