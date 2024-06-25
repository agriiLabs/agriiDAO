import React from "react";
import { useAuth } from "../../hooks/Context";

function More() {
  const { logout } = useAuth();
  return (
    <>
      <div className="header header-fixed header-logo-center">
        <a className="header-title">More Options</a>
        <a href="#" data-back-button className="header-icon header-icon-1">
          <i className="fas fa-arrow-left"></i>
        </a>
        <a href="#" data-toggle-theme className="header-icon header-icon-4">
          <i className="fas fa-lightbulb"></i>
        </a>
      </div>

      <div className="page-content header-clear-medium">
        <div className="card card-style">
          <div className="content my-0">
            <div className="list-group list-custom-small">
              <a href="{% url 'public_user:myprofile' %}">
                <i className="fa fa-user color-blue-dark"></i>
                <span className="opacity-70">Profile</span>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style">
          <div className="content my-0">
            <div className="list-group list-custom-small">
              <a href="{% url 'public_user:referral_summary' %}">
                <i className="fa fa-star color-blue-dark"></i>
                <span className="opacity-70">Royalty Plus</span>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style">
          <div className="content my-0">
            <div className="list-group list-custom-small">
              <a href="{% url 'public_user:walk_through' %}">
                <i className="fa fa-check color-blue-dark"></i>
                <span className="opacity-70">Getting Started</span>
                <i className="fa fa-angle-right"></i>
              </a>
              <a href="{% url 'public_user:member_faqs' %}">
                <i className="fa fa-info color-blue-dark"></i>
                <span className="opacity-70">FAQs</span>
                <i className="fa fa-angle-right"></i>
              </a>
              <a href="{% url 'public_user:member_terms' %}">
                <i className="fa fa-copyright color-blue-dark"></i>
                <span className="opacity-70">Terms and Conditions</span>
                <i className="fa fa-angle-right"></i>
              </a>
              <a href="{% url 'public_user:support' %}">
                <i className="fa fa-comment color-blue-dark"></i>
                <span className="opacity-70">Support</span>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        
          <div className="content my-0">
            <div className="list-group list-custom-small">
              <div className="list-group list-custom-small">
                <button className="btn btn-full btn-m bg-blue-dark rounded-sm text-uppercase font-800 mt-3" onClick={logout}>
                  Logout
                </button>

                    

              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default More;