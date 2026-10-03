// AUTO-CAPTURED hero file-manager view states for the Snaarp Work Drive page.
// The standalone bundle's hero mockup is a working mini file-manager: clicking a
// sidebar nav item (My Drive / Shared with me / Recent / Favourites / Trash)
// swaps the main panel, and a grid/list toggle changes the layout. We captured
// the fully-rendered main-panel markup (tpl 91) for each nav state in both list
// and grid views (headless, from the bundle), normalized the source brand blue
// to the Snaarp purple family, and expose them here so WorkDrivePageClient can
// AUTO-CYCLE the views in a continuous loop (no user click needed).
/* eslint-disable */

export interface DriveViewState { key: string; crumb: string; icon: string; list: string; grid: string; }

export const DRIVE_VIEWS: DriveViewState[] = [
  {
    key: "My Drive",
    crumb: "My Drive",
    icon: "hard_drive",
    list: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">hard_drive</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">My Drive</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
              <div data-dc-tpl="122" style="padding: 12px 16px 4px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; flex: 0 0 auto;">
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Projects</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">13 items</span></span></button>
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Client Files</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">26 items</span></span></button>
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Marketing</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">56 items</span></span></button>
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Finance</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">24 items</span></span></button>
                
              </div>
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Q3 Business Plan.pdf</span></span>
                      
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.4 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 10:24</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(124, 58, 237); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">movie</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Product Demo.mp4</span></span>
                      
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">334 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 09:15</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(110, 26, 255); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">description</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Client Proposal.docx</span></span>
                      
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">1.2 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 16:03</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(245, 158, 11); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">folder_zip</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Design Assets.zip</span></span>
                      
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">1.8 GB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 14:21</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(22, 163, 74); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">table_chart</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Financial Report.xlsx</span></span>
                      
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">890 KB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Aug 20, 2025</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(124, 58, 237); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">movie</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Meeting Recording.mp4</span></span>
                      
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">530 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Aug 20, 2025</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
              
              
              
            </div>
            
            
          </div>`,
    grid: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">hard_drive</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">My Drive</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
              <div data-dc-tpl="122" style="padding: 12px 16px 4px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; flex: 0 0 auto;">
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Projects</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">13 items</span></span></button>
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Client Files</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">26 items</span></span></button>
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Marketing</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">56 items</span></span></button>
                
                  <button data-dc-tpl="124" class="scp7" style="height: 82px; border-radius: 10px; border: 1px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; box-shadow: rgba(57, 20, 120, 0.2) 0px 2px 6px -4px;"><span data-dc-tpl="125" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(131, 59, 255);">folder</span><span data-dc-tpl="126" style="font-size: 11px; font-weight: 700; color: rgb(27, 11, 55);"><span class="sc-interp">Finance</span></span><span data-dc-tpl="127" style="font-size: 9.5px; color: rgb(138, 145, 171);"><span class="sc-interp">24 items</span></span></button>
                
              </div>
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
              
                <div data-dc-tpl="154" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 4px 6px;">
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Q3 Business Plan.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.4 MB</span> · <span class="sc-interp">Today, 10:24</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(241, 236, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(124, 58, 237);"><span class="sc-interp">movie</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Product Demo.mp4</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">334 MB</span> · <span class="sc-interp">Today, 09:15</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(242, 234, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">description</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Client Proposal.docx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">1.2 MB</span> · <span class="sc-interp">Yesterday, 16:03</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(255, 244, 224); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(245, 158, 11);"><span class="sc-interp">folder_zip</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Design Assets.zip</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">1.8 GB</span> · <span class="sc-interp">Yesterday, 14:21</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(231, 248, 238); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(22, 163, 74);"><span class="sc-interp">table_chart</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Financial Report.xlsx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">890 KB</span> · <span class="sc-interp">Aug 20, 2025</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(241, 236, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(124, 58, 237);"><span class="sc-interp">movie</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Meeting Recording.mp4</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">530 MB</span> · <span class="sc-interp">Aug 20, 2025</span></div></div>
                      
                    </div>
                  
                </div>
              
              
            </div>
            
            
          </div>`,
  },
  {
    key: "Shared with me",
    crumb: "Shared with me",
    icon: "group",
    list: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">group</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Shared with me</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Partner Agreement.pdf</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Shared by Sarah Johnson</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">1.9 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 09:02</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(124, 58, 237); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">movie</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Launch Video – Final Cut.mp4</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Shared by Daniel Okafor</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.1 GB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 18:30</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(110, 26, 255); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">description</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Customer Research.docx</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Shared by Amira Hassan</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.6 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Sep 27</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
              
              
              
            </div>
            
            
          </div>`,
    grid: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">group</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Shared with me</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
              
                <div data-dc-tpl="154" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 4px 6px;">
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Partner Agreement.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">1.9 MB</span> · <span class="sc-interp">Today, 09:02</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(241, 236, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(124, 58, 237);"><span class="sc-interp">movie</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Launch Video – Final Cut.mp4</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.1 GB</span> · <span class="sc-interp">Yesterday, 18:30</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(242, 234, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">description</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Customer Research.docx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.6 MB</span> · <span class="sc-interp">Sep 27</span></div></div>
                      
                    </div>
                  
                </div>
              
              
            </div>
            
            
          </div>`,
  },
  {
    key: "Recent",
    crumb: "Recent",
    icon: "schedule",
    list: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">schedule</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Recent</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Most recent</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Q3 Business Plan.pdf</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">My Drive</span></span>
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.4 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 10:24</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Brand Guidelines 2026.pdf</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Team Files</span></span>
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">24 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 09:40</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(124, 58, 237); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">movie</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Product Demo.mp4</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">My Drive</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">334 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 09:15</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Partner Agreement.pdf</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Shared by Sarah Johnson</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">1.9 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 09:02</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(22, 163, 74); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">table_chart</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">FY27 Budget.xlsx</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Finance</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.2 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 17:45</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(110, 26, 255); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">description</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Client Proposal.docx</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">My Drive</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">1.2 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 16:03</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(124, 58, 237); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">movie</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Launch Video – Final Cut.mp4</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Shared by Daniel Okafor</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.1 GB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 18:30</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(234, 88, 12); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">slideshow</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Globex Pitch Deck.pptx</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Client Projects</span></span>
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">22 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Yesterday, 15:12</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
              
              
              
            </div>
            
            
          </div>`,
    grid: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">schedule</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Recent</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Most recent</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
              
                <div data-dc-tpl="154" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 4px 6px;">
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Q3 Business Plan.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.4 MB</span> · <span class="sc-interp">Today, 10:24</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Brand Guidelines 2026.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">24 MB</span> · <span class="sc-interp">Today, 09:40</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(241, 236, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(124, 58, 237);"><span class="sc-interp">movie</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Product Demo.mp4</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">334 MB</span> · <span class="sc-interp">Today, 09:15</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Partner Agreement.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">1.9 MB</span> · <span class="sc-interp">Today, 09:02</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(231, 248, 238); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(22, 163, 74);"><span class="sc-interp">table_chart</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">FY27 Budget.xlsx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.2 MB</span> · <span class="sc-interp">Yesterday, 17:45</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(242, 234, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">description</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Client Proposal.docx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">1.2 MB</span> · <span class="sc-interp">Yesterday, 16:03</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(241, 236, 255); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(124, 58, 237);"><span class="sc-interp">movie</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Launch Video – Final Cut.mp4</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.1 GB</span> · <span class="sc-interp">Yesterday, 18:30</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(255, 240, 230); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(234, 88, 12);"><span class="sc-interp">slideshow</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Globex Pitch Deck.pptx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">22 MB</span> · <span class="sc-interp">Yesterday, 15:12</span></div></div>
                      
                    </div>
                  
                </div>
              
              
            </div>
            
            
          </div>`,
  },
  {
    key: "Favourites",
    crumb: "Favourites",
    icon: "star",
    list: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">star</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Favourites</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Q3 Business Plan.pdf</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">My Drive</span></span>
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">2.4 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 10:24</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(229, 72, 77); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">picture_as_pdf</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Brand Guidelines 2026.pdf</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Team Files</span></span>
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">24 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Today, 09:40</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(22, 163, 74); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">table_chart</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Sprint Roadmap.xlsx</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">My Drive › Projects</span></span>
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">210 KB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Mon, 11:02</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(22, 163, 74); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">table_chart</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Financial Report.xlsx</span></span>
                      <span data-dc-tpl="140" style="font-size: 9.5px; color: rgb(138, 145, 171); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">My Drive</span></span>
                    </span>
                    <span data-dc-tpl="142" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span>
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">890 KB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Aug 20, 2025</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
              
              
              
            </div>
            
            
          </div>`,
    grid: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">star</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Favourites</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
              
                <div data-dc-tpl="154" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 4px 6px;">
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Q3 Business Plan.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">2.4 MB</span> · <span class="sc-interp">Today, 10:24</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(253, 236, 236); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(229, 72, 77);"><span class="sc-interp">picture_as_pdf</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Brand Guidelines 2026.pdf</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">24 MB</span> · <span class="sc-interp">Today, 09:40</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(231, 248, 238); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(22, 163, 74);"><span class="sc-interp">table_chart</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Sprint Roadmap.xlsx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">210 KB</span> · <span class="sc-interp">Mon, 11:02</span></div></div>
                      
                    </div>
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(231, 248, 238); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(22, 163, 74);"><span class="sc-interp">table_chart</span></span><span data-dc-tpl="160" style="position: absolute; right: 6px; top: 5px; font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1; color: rgb(245, 180, 0);">star</span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Financial Report.xlsx</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">890 KB</span> · <span class="sc-interp">Aug 20, 2025</span></div></div>
                      
                    </div>
                  
                </div>
              
              
            </div>
            
            
          </div>`,
  },
  {
    key: "Trash",
    crumb: "Trash",
    icon: "delete",
    list: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">delete</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Trash</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
                
                  <div data-dc-tpl="134" class="scp8" style="height: 38px; display: flex; align-items: center; gap: 10px; padding: 0px 8px; border-radius: 8px; background: transparent; cursor: pointer; animation: auto ease 0s 1 normal none running none;">
                    <span data-dc-tpl="135" style="width: 21px; height: 25px; border-radius: 4px; background: rgb(14, 165, 233); display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="136" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 15px; line-height: 1; color: rgb(255, 255, 255);"><span class="sc-interp">image</span></span></span>
                    <span data-dc-tpl="137" style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column; gap: 1px;">
                      <span data-dc-tpl="138" style="font-size: 11.5px; font-weight: 600; color: rgb(41, 27, 66); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Old Logo Draft.png</span></span>
                      
                    </span>
                    
                    
                      <span data-dc-tpl="144" style="width: 58px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">3.2 MB</span></span>
                      <span data-dc-tpl="145" style="width: 96px; flex: 0 0 auto; font-size: 10.5px; color: rgb(107, 115, 144); text-align: right; white-space: nowrap;"><span class="sc-interp">Sep 14</span></span>
                    
                    
                    <button data-dc-tpl="151" class="scp9" style="width: 22px; height: 22px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center; flex: 0 0 auto;"><span data-dc-tpl="152" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">more_horiz</span></button>
                  </div>
                
              
              
              
            </div>
            
            
          </div>`,
    grid: `<div data-dc-tpl="91" style="flex: 1 1 0%; min-width: 0px; position: relative; display: flex; flex-direction: column;">
            <div data-dc-tpl="92" style="height: 56px; flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 0px 16px; border-bottom: 1px solid rgb(243, 240, 248);">
              <label data-dc-tpl="93" style="flex: 1 1 0%; min-width: 0px; height: 34px; border-radius: 9px; background: rgb(248, 245, 252); border: 1px solid transparent; display: flex; align-items: center; gap: 8px; padding: 0px 10px; cursor: text;">
                <span data-dc-tpl="94" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 17px; line-height: 1; color: rgb(138, 145, 171);">search</span>
                <input data-dc-tpl="95" placeholder="Search in Drive…" value="" style="flex: 1 1 0%; min-width: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; outline: none; font-size: 12px; color: rgb(27, 11, 55); font-weight: 500;">
                
                <button data-dc-tpl="100" title="Search filters" style="border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; color: rgb(138, 145, 171); display: grid; place-items: center; padding: 0px;"><span data-dc-tpl="101" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">tune</span></button>
              </label>
              <button data-dc-tpl="102" class="scp2" style="white-space: nowrap; height: 34px; padding: 0px 14px; border-radius: 9px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: rgb(110, 26, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: rgba(110, 26, 255, 0.8) 0px 8px 16px -8px;"><span data-dc-tpl="103" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">cloud_upload</span>Upload</button>
            </div>
            <div data-dc-tpl="104" style="padding: 14px 16px 0px; display: flex; align-items: center; gap: 6px; flex: 0 0 auto;">
              
              <span data-dc-tpl="108" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 18px; line-height: 1; color: rgb(110, 26, 255);"><span class="sc-interp">delete</span></span>
              <span data-dc-tpl="109" style="flex: 0 1 auto; min-width: 0px; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 1px;"><span class="sc-interp">Trash</span></span>
              <button data-dc-tpl="110" class="scp6" style="margin-left: auto; white-space: nowrap; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; background: transparent; cursor: pointer; font-size: 10.5px; font-weight: 600; color: rgb(107, 115, 144); display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px;"><span class="sc-interp">Last modified</span><span data-dc-tpl="111" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 14px; line-height: 1;">arrow_drop_down</span></button>
              <button data-dc-tpl="112" title="Grid view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: rgb(242, 234, 255); color: rgb(110, 26, 255); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="113" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">grid_view</span></button>
              <button data-dc-tpl="114" title="List view" style="width: 24px; height: 24px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; border-radius: 6px; background: transparent; color: rgb(138, 145, 171); cursor: pointer; display: grid; place-items: center;"><span data-dc-tpl="115" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 16px; line-height: 1;">view_list</span></button>
            </div>
            
            
            
            <div data-dc-tpl="131" class="dscroll" style="flex: 1 1 0%; min-height: 0px; overflow: auto; padding: 8px 10px 12px;">
              
              
                <div data-dc-tpl="154" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 4px 6px;">
                  
                    <div data-dc-tpl="156" class="scpa" style="border-radius: 10px; border: 1.5px solid rgb(237, 232, 245); background: rgb(255, 255, 255); cursor: pointer; overflow: hidden;">
                      <div data-dc-tpl="157" style="height: 60px; background: rgb(230, 246, 253); display: grid; place-items: center; position: relative;"><span data-dc-tpl="158" style="font-family: &quot;Material Symbols Rounded&quot;; font-size: 28px; line-height: 1; color: rgb(14, 165, 233);"><span class="sc-interp">image</span></span></div>
                      <div data-dc-tpl="161" style="padding: 7px 8px;"><div data-dc-tpl="162" style="font-size: 10.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><span class="sc-interp">Old Logo Draft.png</span></div><div data-dc-tpl="163" style="margin-top: 2px; font-size: 9px; color: rgb(138, 145, 171); white-space: nowrap;"><span class="sc-interp">3.2 MB</span> · <span class="sc-interp">Sep 14</span></div></div>
                      
                    </div>
                  
                </div>
              
              
            </div>
            
            
          </div>`,
  },
];
